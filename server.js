const express = require('express')
const app = express()
const port = 3000
const QRCode = require('qrcode')
const bp = require('body-parser')
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.post('/generate', (req, res) => {
  QRCode.toDataURL(req.body.message, (err, qr) => {
    console.log(qr);
    res.send(qr);
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
