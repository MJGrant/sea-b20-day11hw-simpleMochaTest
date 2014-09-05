//Simple JSON database app
//To use:
//$ server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(bodyParser.json());

var count = 10;

app.get('/', function(req, res) {
  res.send('Welcome to Grubburg! Use /grubs/random to see a random grub, or /grubs/count to see how many grubs there are total.');
});

var grubs = [
  { grub : 'Wy', text : "Why Wy wall?"},
  { grub : 'Yummy', text : "YumMY!"},
  { grub : 'Blizzy', text : "BIG AND PLUSHY"},
  { grub : 'Annie', text : "FIVE!"},
  { grub : 'Shy', text : "Why be Shy when Wy shies behind Shy?"},
  { grub : 'Terry', text : "I hate you all >:("},
  { grub : 'Gadget', text : "Gadget isn't a grub"},
  { grub : 'Flake', text : "Flakerbake"},
];

app.get('/', function(req, res) {
  res.json(grubs);
});

app.get('/grubs/random', function(req, res) {
  var id = Math.floor(Math.random() * grubs.length);
  var grub = grubs[id];
  res.json(grub);
});

app.get('/grubs/all', function(req, res) {
  res.json(grubs);
});

app.get('/grubs/count', function(req,res) {
  res.json({
    count:count,
    message: 'Wow, there are ' + count + ' grubs!'
  });
});

app.get('/grubs/add/:num', function(req, res) {
  count += parseInt(req.params.num);
  res.json({
    add: req.params.num,
    message: 'YAY! You just added ' + req.params.num + ' new grubs!',
    count:count
  });
});

var server = http.createServer(app);
app.listen(process.env.PORT || 3000);
