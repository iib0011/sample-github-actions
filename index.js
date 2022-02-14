const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const express = require('express')
const app = express()
let bodyParser = require('body-parser')
const {formatAndGenerate}=require("./Formatter");
const { uploadFile } = require("./Storer");
app.use(bodyParser.json());

app.get'/', (req, res) => {
    console.log(req.body);
    setTimeout(()=>  res.send('jh hj!')
    ,5000);
  formatAndGenerate(invoiceData);

})
app.post('/', async (req, res) => {
    console.log("body",req.body);
const filename=await formatAndGenerate(req.body.content);
uploadFile(filename).then((url)=>res.send({url})).catch(console.log);

})

exports.generate = functions.https.onRequest(app);
