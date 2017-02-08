var express = require('express');
var bodyParser = require('body-parser');


var books = [
  {
    title: 'Harry Potter 1',
    rating: 9
  },
  {
    title: 'HP 4',
    rating: 10
  }
]

var app = express();
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/books', function(req, res, next){
  res.status(200).json(books);
})

app.post('/books', function(req, res, next){
  books.push(req.body);
  res.status(200).json(books)

});




var port = 3000;
app.listen(port, function(){
  console.log("listening to port " + port)
});
