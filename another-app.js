const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public', 'another-app')))

app.listen(8081, () => {
  console.log('Server is running at http://localhost:8081')
})
