
const express = require('express');
const app = express()
const Verifier = require("email-verifier");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 4000


let verifier = new Verifier("at_2jE9BUaOQyx6axrGWYX0qYnmadFEF");



app.post('/validateEmail', function(req, res)  {
    console.log(req.body.email)
    const email = req.body.email;
 
    if (!email){
      return res.status(400).send({
        message: "Email missing!!!"
      })
    }
    else{
    verifier.verify(email, (err, data) => {
        if (err) console.log(err);
       else{
        res.status(200).send(data)
        console.log(data);
       } 
    });
}
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
 