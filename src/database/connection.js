import mongoose from 'mongoose';

const mongoDB = 'mongodb://127.0.0.1:27020/test';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

export default db;
