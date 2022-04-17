const functions = require("firebase-functions");
const express = require('express')
const app = express()
const port = 3000
const QRCode = require('qrcode')
const bp = require('body-parser')
const { MongoClient } = require("mongodb");
const { user } = require("firebase-functions/v1/auth");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

// Connection URI
const uri = "mongodb+srv://admin:rQbMxlDmogFNavik@aggierewards.5psgr.mongodb.net/aggieSpirit?retryWrites=true&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
const collection = client.db("AggieSpirit").collection("users");
const rewards = client.db("AggieSpirit").collection("rewards");

// Increment points of a user
async function addOneReward(username) {
  try {
    // Connect the client to the server
    await client.connect();

    // Finds user in db, if they don't exist, add them
    // Increments points by 1 in database
    await collection.updateOne(
      {userName: username}, 
      {$inc: {points: 1}},
      {upsert: true}
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// in between function for points api
async function getUserPoints(username) {
  try {
    // Connect the client to the server
    await client.connect();

    // look for the specified user
    let userPoints = await collection.findOne(
      {userName: username}, 
      {projection: {_id: 0, userName: 0}}
    );

    return(Object.values(userPoints));
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function getAllRewards() {
  // try {
  //   // Connect the client to the server
  //   await client.connect();

  //   let userPoints = await rewards.
  //   // TODO: return this so get /points can disply with res.send
  //   return(Object.values(userPoints));
  // } finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }
}

app.get('/', (req, res) => {
  res.send("Base page");
})

// Client TODO: When you open the QR tab as a user, send a POST request
// to this route. As part of the body of the request, send {username: user}
// Generate a QR code based on the verify url
app.post('/generate', (req, res) => {
  console.log("Generate request received");
  // create verification url
  url = `https://us-central1-aggierewards-ea14c.cloudfunctions.net/app/verify?username=${req.body.username}`
  //temp = `localhost:3000/${req.body.username}`
  QRCode.toDataURL(url, (err, qr) => {
    res.send(qr);
  })
})

// [Verify] and update points
// Todo: the actual verifation/auth process for validity of qr code
app.get('/verify', (req, res) => {
  console.log("Verify request received");
  // Send a update request to the db
  // and do the update
  addOneReward(req.query.username).catch(console.dir);

  // Notify user of point
  console.log(`${req.query.username} has earned 1 point`);
  res.send(`${req.query.username} has earned 1 point`);
})

// Go look at the database
app.get('/points', (req, res) => {
  console.log("Points request received");
  // Call async lookup function
  getUserPoints(req.query.username)
    .then((pointsRes) => {
      console.log(pointsRes);
      res.send(pointsRes);
    })
    .catch(console.dir);
})

// Get a list of all prizes available
app.get('/rewards', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

exports.app = functions.https.onRequest(app);
