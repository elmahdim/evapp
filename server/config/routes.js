var mongoose = require('mongoose');

module.exports = function (app) {
 app
 .get('/', function(req, res) {
   res.render('index');
  })
 .get('/partials/:partialPath',function(req, res){
   res.render('partials/' + req.params.partialPath);
  })
}