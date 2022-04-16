const express = require('express')
const app = express()
const port = 3000
const QRCode = require('qrcode')
const bp = require('body-parser')
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

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
