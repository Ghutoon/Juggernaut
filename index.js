const express = require('express');

const app = express();
const port = process.env.PORT || 8080; // TODO : 

app.use(express.urlencoded({ extended: true }));


// routes will go here


// ...

// routes will go here
// ...

app.get('/api/users', function(req, res) {
    const user_id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });
  



app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
  });

  // ...

app.param('name', function(req, res, next, name) {
    const modified = name.toUpperCase();
  
    req.name = modified;
    next();
  });
  
  // routes will go here
  // ...
  
  app.get('/api/users/:name', function(req, res) {
    res.send('Hello ' + req.name + '!');
  });
  
  app.post('/api/users', function(req, res) {
    console.dir(req.header, {depth:null})
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });

  app.post('/api/messages', function(req, res) {
    console.dir(req.body, {depth:null})
    res.sendStatus(200);
  
    
  });
  app.listen(port);
  console.log('Server started at http://localhost:' + port);

