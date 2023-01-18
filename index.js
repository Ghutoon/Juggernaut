const express = require('express');

var axios = require('axios');
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
    res.sendStatus(403);
  }
});

function generate_data(to, text)
{
  var data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": to,
    "type": "text",
    "text": {
      "body": text
    }
  });
  return data;
}
var temp;
app.post('/api/messages', function (req, res) {
  console.dir(req.body, { depth: null });
  var to = req.body.entry[0].changes[0].value["messages"][0]["from"];
  var text = req.body.entry[0].changes[0].value["messages"][0]["text"]["body"];
  temp = text;
  var sending_data = generate_data(to, text);

  /*var config = {
    method: 'post',
    url: 'https://graph.facebook.com/v15.0/101412459527848/messages',
    headers: { 
      'Authorization': 'Bearer EAAJSC3t7aH0BACoSZCsAWGttTtz0zx7UaYiryJpkcwNwvopKCMPUOhZCDbZCvja91mVfqnYP3gKGXObS9iWesGiSEYnQMykykCjRqoeXQi7yjTMuh5LKaZC0tk6taJXGUZC3pRWyeoa2ISwLcsETBVFB9UqCGG9xqZAs32XWbb0lu1tZA3oD6ccwFKuLWYRvAFCzTL6CqjKMwZDZD', 
      'Content-Type': 'application/json'
    },
    data : sending_data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });*/

  res.sendStatus(200);


});

console.log(temp);
app.listen(port);
console.log('Server started at http://localhost:' + port);

