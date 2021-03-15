import mongoose from 'mongoose';
import { DatabaseConnectionEror } from '@rb6art/common';
import { app } from './app';

const start = async () => {

  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be defined.')
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined.')
  }


  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
    console.log('Connected to POSTs mongo db')
  } catch (err) {
    throw new DatabaseConnectionEror();
  }
  app.listen(3000, () => {
    console.log('Post service is listening on port 3000.');
  });
}

start()
