import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from 'supertest';
import { app } from '../app';

let mongo: MongoMemoryServer;

// Appending signin/type to the global obj 
declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>
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


// Setting up a reusable signin test.
global.signin = async () => {
  const email = 'test@test.com';
  const password = 'password';
  const signupURL = '/api/user/signin';

  const signupResponse = await request(app)
    .post(signupURL)
    .send({
      email,
      password
    })
    .expect(201);

  const cookie = signupResponse.get('Set-Cookie');
  return cookie;
}