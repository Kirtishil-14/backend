const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  obj = db.db("test");
  query = { name: "kirtishil" };
  update = { $set: { name: "Kirtishil", age: 25 } };
  obj.collection("testing").updateOne(query, update, function (err, res) {
    if (err) throw err;
    console.log("data updated successfully");
    db.close();
  })
})