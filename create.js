const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  obj = db.db("test");
  obj.createCollection("testing", function (err, res) {
    if (err) throw err;
    console.log("collection created");
    db.close();
  })
})