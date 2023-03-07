const express = require('express')
const app = express()
const port = 80

app.use(express.text())

app.post('*', (req, res) => {
  console.log('>> HIT', req.body)
  res.send('ok'+req.body)
})

app.get('*', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`>> Example app listening on port ${port}`)
})
