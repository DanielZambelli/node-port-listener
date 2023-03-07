const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 80

app.use(express.text())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

app.post('*', async (req, res) => {
  res.send('ok'+req.body)
  console.log('>> hit', req.body)
  await fetch('https://10.1.79.31/api/device/dataString/xxxxxx', {
    method: 'POST',
    body: 'xxxxxx'
  })
})

app.get('*', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`>> Example app listening on port ${port}`)
})
