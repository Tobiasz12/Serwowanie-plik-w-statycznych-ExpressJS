var express = require('express');
var app = express();
var fs = require('fs')
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/getNote', function(req,res){
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        fileContent = data
        app.use(bodyParser.json());
        res.send(fileContent);
    });
})

app.post('/updateNote/:note', function(req,res){
    fs.writeFile('./test.json', stringiFile, function(req, res, next) {
        var fileContent = req.params.note
        res.send(fileContent);
    });
})

app.listen(3000);
