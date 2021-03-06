var express = require('express')
var app = express()

// respond with fizzbuzz output for GET at /fizzbuzz/:foo
app.get('/fizzbuzz/:foo', function(req, res) {
	var myInstance = new FizzbuzzClass();
	var ret = myInstance.fizzbuzz(req.params.foo);
	res.send(ret);
})

// respond with fizzbuzzwoof output for GET at /fizzbuzzwoof/:foo
app.get('/fizzbuzzwoof/:foo', function(req, res) {
	var myInstance = new FizzbuzzClass();
	var ret = myInstance.fizzbuzzwoof(req.params.foo);
	res.send(ret);
})

var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

function FizzbuzzClass (){

}

FizzbuzzClass.prototype.fizzbuzz = function(foo) {
	if (foo % 15 == 0) {
		return "fizzbuzz";
	};
	if (foo % 5 == 0) {
		return "buzz";
	};
	if (foo % 3 == 0) {
		return "fizz";
	};
	return foo;
};

FizzbuzzClass.prototype.fizzbuzzwoof = function(foo) {
	if (foo % 15 == 0) {
		return "woof!";
	};
	if (foo % 5 == 0) {
		return "buzz";
	};
	if (foo % 3 == 0) {
		return "fizz";
	};
	return foo;
};