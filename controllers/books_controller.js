var books = require('../models/books');


module.exports = {
  index: function(req, res, next){
    if (!req.query.rating){
      return res.status(200).json(books);
    }
    var result = [];
    for (var i = 0; i < books.length; i++) {
      if(books[i].rating > parseInt(req.query.rating)) {
        result.push(books[i])
      }
    }
    res.status(200).json(result);
  },

  show: function(req, res, next){
    res.status(200).json(books[parseInt(req.params.id)])
  },

  create: function(req, res, next){
    books.push(req.body);
    res.status(200).json(books)
  }
}
