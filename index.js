const express = require('express');

const app = express();
const port = process.env.PORT || 8080; // TODO : 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/messages', function (req, res) {
  if (req.query["hub.verify_token"] == "niladri") {

    console.log("Verifying token");
    res.send(req.query["hub.challenge"]);

    console.log("Verifying token2");
  }
  else{
    console.log("Token not verified");
    res.send(403);
  }
});
app.post('/api/messages', function (req, res) {
  console.dir(req.body, { depth: null });
  res.sendStatus(200);


});
app.listen(port);
console.log('Server started at http://localhost:' + port);

