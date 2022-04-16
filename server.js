const express = require('express')
const app = express()
const port = 3000
const QRCode = require('qrcode')
const bp = require('body-parser')
const { MongoClient } = require("mongodb");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

// Connection URI
const uri = "mongodb+srv://admin:rQbMxlDmogFNavik@aggierewards.5psgr.mongodb.net/aggieSpirit?retryWrites=true&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Generate a QR code based on the verify url
app.post('/generate', (req, res) => {
  // create verification url
  url = `localhost:3000/verify/${req.body.username}`
  console.log(url)
  QRCode.toDataURL(url, (err, qr) => {
    res.send(url);
  })
})

// [Verify] and update points
// Todo: the actual verifation/auth process for validity of qr code
app.post('verify', (req, res) => {
  // Send a update request to the db
  
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
