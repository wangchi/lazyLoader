/**
* lazyLoad server
* base on Express
*
* lazyLoad v0.1.0 https://github.com/wangchi/lazyLoad
*
* MIT
*
*/

var express = require('express'),
    app = express();


// development
app.use(express.static('app'));

// production
// app.use(express.static('dist'));


app.get('/', function ( req, res ) {
    
});


var port = 3000;
app.listen( port, function () {
    console.log('lazyLoad is running in http://127.0.0.1:%d\nPress [Ctrl+C] Stop Running', port);
});