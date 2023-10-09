const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://kupanzalan:wBL1ZoRrmeQVjctU@cluster0.b0d3pcb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;