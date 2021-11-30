const express = require("express");
const fs = require("fs/promises");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://ArnoStephanSacha:GeenWW@cluster0.8bqlv.mongodb.net/ArnoStephanSacha?retryWrites=true&w=majority";
// const config = require("./config.json");

// Create the mongo client to use
// const client = new MongoClient(config.finalUrl);
const client = new MongoClient(url, { useNewUrlParser: true });

const app = express();
const port = 1337;

app.use(express.static("public"));
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
    res.status(300).redirect("/info.html");
});

// Return all challenges from the file
app.get("/challenges", async (req, res) => {
    try {
        // Read the file
        let data = await fs.readFile("data/challenges.json");
        // Return the file
        res.status(200).send(JSON.parse(data));
    } catch (error) {
        res.status(500).send("File could not be read! Try again later...");
    }
});

// Save a challenge
app.post("/challenges", async (req, res) => {
    // Validation
    if (!req.body._id || !req.body.name || !req.body.points || !req.body.course) {
        res.status(400).send("Bad request: Missing id, name, points or course");
        return;
    }
    try {
        // Read the file
        let challenges = await fs.readFile("data/challenges.json");
        // Parse from string to an Object
        challenges = JSON.parse(challenges);
        res.send("OK");
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong...",
            value: error,
        });
    }
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
