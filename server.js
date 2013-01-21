//requires express module
var express = require('express');
//creates app instance
var app = new express();
//listens on /GET

app.use(express.static(__dirname + '/web' ));

app.get('/Test', function(req, res) {
	res.send('hello world Test');
});


//keeps application alive on port 3000
app.listen(3000);
