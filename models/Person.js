// Sample model code.

module.exports = {
	create: function (options) {
		return {
			name: options.name,
			age: options.age,
			gender: options.gender,
			country: options.country
		}
	}
}