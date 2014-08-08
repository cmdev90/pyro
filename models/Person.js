
// Sample model code.

// You are free to define your models in whatever way
// you desire. Models will be made avaliable through the
// global `models` object.

module.exports = {
	create: function (options) {
		return {
			name: options.name,
			age: options.age,
			gender: options.gender,
			country: options.country,
			save: function(success, error){
				console.log('saved', this);
			}
		}
	},
}