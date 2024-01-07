const { MongoClient } = require("mongodb");

let _db;

const mongoConnect = (callback) => {
  // GjmyHrbbSEXJLiDX
  const uri =
    "mongodb+srv://karimshaik5252:GjmyHrbbSEXJLiDX@cluster0.fsc0kdu.mongodb.net/Node";
  MongoClient.connect(uri)
    .then((dbclient) => {
      console.log("connected");
      _db = dbclient.db('shop');
      callback();
    })
    .catch((err) => {
      console.log("failed");
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
