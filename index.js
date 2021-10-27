const express = require('express')
const app = express()
const port = 3000
app.get('/download', function(req, res){
    const file = `${__dirname}/bolvachtoli.jpg`;
    res.download(file); // Set disposition and send it.
  });

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  