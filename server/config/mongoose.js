var mongoose   = require('mongoose');

module.exports = function(config){
 mongoose.connect(config.db);
 var db = mongoose.connection;
     db.on('error', console.error.bind(console, 'connection error : ('));
     db.once('open', function callbck() {
       console.log(config.db + ' opened : )');
     });
}