import express from 'express';
import cookieSession from 'cookie-session'
import 'express-async-errors';
import mongoose from 'mongoose';
import { json } from 'body-parser'
import { authRoutes } from './routes/authRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './errors/not-found-error';

const app = express();

/**
  We need this because  we are using ingress nginx proxy. 
  By default express will trust traffic even though its coming form that proxy.
*/
app.set('trust proxy', true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);

// Middlewere Routes
app.use('/api', authRoutes);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {

  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be defined.')
  }

  try {
    await mongoose.connect(
      'mongodb://auth-mongo-clusterip-service:27017/auth',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
    console.log('Donnected to db')
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000.');
  });
}

start()