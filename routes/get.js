
module.exports = {
	'/sample/path/:param': {
		module: 'Sample',
		target: 'publicFunction',
		policy: [
			'policy1',
			'policy2',
			'policy3'
		],
		
	}
}