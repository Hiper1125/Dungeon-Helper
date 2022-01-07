const { dbName, dbUser, dbPassword, cluster } = require("./config.json");
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${cluster}.yeabh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db(dbName).collection("characters");
  // perform actions on the collection object
  client.close();
});