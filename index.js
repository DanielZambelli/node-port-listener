const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 80

app.use(express.text())

app.post('*', async (req, res) => {
  res.send('ok'+req.body)
  await fetch('https://10.1.79.31/api/device/dataString/xxxxxx', {
    method: 'POST',
    body: 'xxxxxx'
  })
  console.log('>> forwarded', req.body)
})

app.get('*', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`>> Example app listening on port ${port}`)
})
