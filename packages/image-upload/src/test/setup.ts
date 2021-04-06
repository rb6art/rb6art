import jwt from 'jsonwebtoken';
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongo: MongoMemoryServer;

// Appending signin/type to the global obj 
declare global {
  namespace NodeJS {
    interface Global {
      signin(): Array<string>
    }
  }
}

beforeAll(async () => {
  process.env.JWT_SECRET = "asdfasdf";

  mongo = new MongoMemoryServer();
  const mongoURI = await mongo.getUri();

  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});


// Reset the mongodb before each test.
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});


// Setting up a reusable signup test.
global.signin = () => {

  // Recreating the session cookie that is generated buy JWT
  const payload = {
    id: '2i4l1kj51lka',
    email: 'test@test.com',
    password: 'password'
  }
  const sesseion = {
    jwt: jwt.sign(payload, process.env.JWT_SECRET!)
  }
  const jsonSession = JSON.stringify(sesseion);
  const base64 = Buffer.from(jsonSession).toString('base64');

  return [`express:sess=${base64}`];
}
