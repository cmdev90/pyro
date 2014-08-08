
module.exports = function (rootdir) {
	var modules = {},
		fs = require('fs')

	console.log('Loading modules from', rootdir)
	var filenames = fs.readdirSync(rootdir), // Get the name of each file in the modules root dir.
	    startTime = new Date(), endTime // Lets also take time checks

	// For each file, check to see if it has the `.js` extention
	for ( var x in filenames ) {
		var curr = filenames[x]

		if ( curr.indexOf('.js') > 0 ) {
			console.log('Loading module from', curr)

			// if this is a valid module lets try to load it into the
			// global module object fo use in the framework.
			var module = require(rootdir+'/'+curr);

			if (typeof module === 'function'){
				// A valid module returns a function that is executable 
				// by the framework.
				modules[curr.split(".js")[0]] = module
				console.log('Done!')
			} 
			else {
				// Warn the programmer about a possible error in
				// the creation of the module but no not fail the program.
				console.log("Warning! The module", curr, "is not a valid module becuase it does not export a function.\nIgnoring file", curr)
			}
		}
	}
	global.pyro = modules

	endTime = new Date()
	console.log('Time to load', endTime-startTime + 'ms')
}