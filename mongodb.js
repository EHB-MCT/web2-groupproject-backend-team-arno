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

    // Construct a document                                                                                                                                                              
    let challenge = {
      name: "challenge5",
      points: 82,
      session: "session6",
      course: "WEBII"
    }

    // Insert a single document, wait for promise so we can read it back
    const p = await challenges.insertOne(challenge);
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

run().catch(console.dir);