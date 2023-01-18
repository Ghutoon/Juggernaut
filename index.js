const express = require('express');

const app = express();
const port = process.env.PORT || 8080; // TODO : 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.post('/api/messages', function(req, res) {
    console.dir(req.body, {depth:null})
    res.sendStatus(200);
  
    
  });
  app.listen(port);
  console.log('Server started at http://localhost:' + port);

