// First thing we need to do is load the application
// configuration files

var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.send('hello world')
})



module.exports = {
	start: function (){
		app.listen(3000)
	}
}