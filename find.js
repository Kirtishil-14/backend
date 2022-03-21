const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  obj = db.db("test");
  //find all
  // obj.collection("testing").find({}).toArray(function (err,res){})
  //find one
  obj.collection("testing").findOne({}, function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  })
})