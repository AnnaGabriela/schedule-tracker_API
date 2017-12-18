const mongoose = require('mongoose');
const mongoDB = 'mongodb://computacao:p0l1JReng@ds133816.mlab.com:33816/schedule-tracker';
const db = mongoose.connection;

mongoose.connect(mongoDB, { useMongoClient: true });

db.on('error', console.error.bind(console, 'Mongo connection error: '));