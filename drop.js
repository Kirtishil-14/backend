const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  obj = db.db("test");
  obj.collection("testing").drop(function (err, res) {
    if (err) throw err;
    if (res) console.log("deleted");
    db.close();
  })
})