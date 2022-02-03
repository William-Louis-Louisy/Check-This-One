const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_URL);
client.connect();
const database = client.db("check-this-one");
module.exports = database;
