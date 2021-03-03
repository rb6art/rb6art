import mongoose from 'mongoose';
import { DatabaseConnectionEror } from '@rb6art/common';
import { app } from './app';

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
    console.log('Connected to db')
  } catch (err) {
    throw new DatabaseConnectionEror();
  }
  app.listen(3000, () => {
    console.log('Post service is listening on port 3000.');
  });
}

start()
