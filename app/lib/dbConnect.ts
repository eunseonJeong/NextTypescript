import mongoose from 'mongoose';

//여기서 로컬이면 실행이 안됨 !!! 명심하기!!!
const DB_URI = 'mongodb://127.0.0.1:27017/test';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .set({ debug: true, strictQuery: false })
      .connect(`${DB_URI}`)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
