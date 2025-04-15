
var express = require('express');
var app = express();
app.set('view engine','ejs');

app.use('/public', express.static('public'));

app.get('/', function (req, res){
    res.render("home");
    console.log('Someone visited the home page!');
});

app.get('/auckland', function (req, res){
    res.render("auckland");
});

app.listen(3000);
console.log('App is running on port 3000');


