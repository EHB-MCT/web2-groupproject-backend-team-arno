const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://ArnoStephanSacha:GeenWW@cluster0.8bqlv.mongodb.net/ArnoStephanSacha?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("ArnoStephanSacha");

    const col = db.collection("challenge");

  }catch{
    console.log(err.stack);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);