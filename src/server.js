const express = require('express')
require('dotenv').config()
const server = express()
server.get('', (req, res) => {
  res.json({ message: 'hello' })
})
server.listen(process.env.PORT || 3000, () => {
  console.log('server started')
})
