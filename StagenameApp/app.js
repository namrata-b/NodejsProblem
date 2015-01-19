var express = require('express')
var app = express()

// get
app.get('/fizzbuzz/:foo', function(req, res) {
	var myInstance = new FizbuzzClass();
	var ret = myInstance.fizbuzz(req.params.foo);
	res.send(ret);
})

var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

function FizbuzzClass (){

}

FizbuzzClass.prototype.fizbuzz = function(foo) {
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
// static function fizbuzz(foo) {

// 	if (foo % 15 == 0) {
// 		return "fizzbuzz";
// 	};
// 	if (foo % 5 == 0) {
// 		return "buzz";
// 	};
// 	if (foo % 3 == 0) {
// 		return "fizz";
// 	};
// 	return foo;
// }