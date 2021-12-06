// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://admin:admin@cluster0.8bqlv.mongodb.net/session5?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("session5").collection("boardgames");
//   // perform actions on the collection object
//   client.close();
// });

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://ArnoStephanSacha:GeenWW@cluster0.8bqlv.mongodb.net/ArnoStephanSacha?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "ArnoStephanSacha";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const challenges = db.collection("challenges");
    const users = db.collection("users");

    // Construct a document for the challenges
    let challenge = {
      name: "challenge5",
      points: 82,
      session: "session6",
      course: "WEBII"
    }
    // Construct a document for the challenges
    let user = {
      name: "iets",
    }

    // Insert a single document, wait for promise so we can read it back
    const insertChallenge = await challenges.insertOne(challenge);
    const insertUser = await users.insertOne(user);
    // Find one document
    const oneChallenge = await challenges.findOne();
    // Print to the console
    console.log(oneChallenge);

  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

function addUser(users){
  let user = {
    name: "iets",

  }
  const p = await users.insertOne(user);
}

run().catch(console.dir);