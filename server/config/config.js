var path     = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development : {
        db       : 'mongodb://localhost/evapp_db',
        rootPath : rootPath,
        port     : process.env.PORT || 3000
    },
    production : {  
        db       : 'mongodb://localhost/evapp_db', // API in the cloud
        rootPath : rootPath,
        port     : process.env.PORT || 80
    }
}