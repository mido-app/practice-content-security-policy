const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app', 'index.html'))
})

const params = [
  {
    title: 'No Content-Security-Policy Header is set',
    cspHeader: null,
    cspMeta: null
  },
  {
    title: 'Set Content-Security-Policy Header',
    cspHeader: "default-src 'self'",
    cspMeta: null
  },
  {
    title: 'Set Content-Security-Policy to meta tag',
    cspHeader: null,
    cspMeta: "default-src 'self'"
  }
]

app.get('/sample/:id', (req, res) => {
  // Set Content-Security-Policy Header
  if (params[req.params.id].cspHeader) {
    res.set('Content-Security-Policy', params[req.params.id].cspHeader)
  }

  // Render html and send response
  res.render('sample.ejs', {
    title: params[req.params.id].title,
    cspMeta: params[req.params.id].cspMeta
  })
})

app.listen(8080, () => {
  console.log('Server is running at http://localhost:8080')
})
