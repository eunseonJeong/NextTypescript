import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}
