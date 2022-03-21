const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/27017/test";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log('db created');
  db.close();
})