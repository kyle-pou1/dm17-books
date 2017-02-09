var express = require('express');
var bodyParser = require('body-parser');

var booksController = require('./controllers/books_controller')

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next){
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  console.log('body: ', req.body);
  next();
})

app.get('/books', booksController.index );
app.get('/books/:id', booksController.show);
app.post('/books', booksController.create);




var port = 3000;
app.listen(port, function(){
  console.log("listening to port " + port)
});
