var global = require('./index.js')
var chai = require('chai'), assert = chai.assert

describe("const-global", function () {

	it("should exist", function () {
		assert('object' === typeof global)
		assert(null !== typeof global)
	})

	it("should include the standard constructors", function () {
		assert.isFunction(global.Array)
		assert.isFunction(global.Boolean)
		assert.isFunction(global.Date)
		assert.isFunction(global.Error)
		assert.isFunction(global.Function)
		assert.isFunction(global.Object)
		assert.isFunction(global.RegExp)
		assert.isFunction(global.String)
		assert.isDefined(global.Math)
	})

})
