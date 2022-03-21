const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/27017/"

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  obj = db.db("test");
  query = { name: "Kirtishil", age: 24 };
  obj.collection("testing").insertOne(query, function (err, res) {
    if (err) throw err;
    console.log("data inserted");
    db.close();
  });
})