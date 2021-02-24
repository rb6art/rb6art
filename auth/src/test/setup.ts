import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from '../app';

let mongo: MongoMemoryServer;

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

afterAll( async () => {
  await mongo.stop();
  await mongoose.connection.close();
});