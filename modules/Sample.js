// Sample module file.
// Modules will be made accesable via the global module
// object.

// Modules invoked by the framework will be passed the 
// req and res object parameters. When modules are invoked manually
// you can pass your own parameters directly to them. Paramters defined
// in the function signature will be undefined when invoked
// by the framework.

module.exports = function (req, res) {
	 // Write all private variables here;
	 var user = req.user

	 // You can describe private functions here as well.
	 var privateFunction = function (options){
	 	return console.log("options passed", options)
	 }

	 // return a POJSO describing the public functions of this 
	 // object.
	return {
		// public functions can take its own parameters.
		publicFunction: function (param, callback) { 
			// We can call private functions here!
			privateFunction({message: 'this is a call from private'})

			// Because of cloures you have access to the
			// req and res objects!
			// if (req && res) {
				console.log("req", req)
				console.log("res", res)
			// }
			// else {
				// You are able to choose context of execution by either returning to
				// the res object or passing the result directly back.
				return callback(param)
			// }
		}
	}
} // never self-invoke this function space. You will break things...