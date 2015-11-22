var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    port       = 8000;

app
   .use(express.static(__dirname + '/public'))
   .set('view engine', 'jade')
   .use(bodyParser.json())
   .get('/', function(req, res) {
     res.render('index');
   })
   .get('/partials/:partialPath',function(req, res){
     res.render('partials/' + req.params.partialPath);
    })
   .listen(port);
   console.log('Listening to port ' + port + '...');
