import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

declare global {
  var signin: (id?: string) => string[];
}

jest.mock('../nats-wrapper');

process.env.STRIPE_KEY = '[insert-key-here]';

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdf';
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();

  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = (id?: string) => {
  // build a JWT payload { id, email }
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com'
  };

  // create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // build a session object { jwt: MY_JWT }
  const session = { jwt: token };

  // turn session into JSON
  const sessionJSON = JSON.stringify(session);

  // encode JSON into base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // return a string that's the cookie with the encoded data
  return [`session=${base64}`];
};
