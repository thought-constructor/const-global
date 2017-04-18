var Global = function (F, e) {
	try { return F('return this')() || (1, e)('this') }
	catch (x) { return window }	
}

var global = Global(Function, eval)

module.exports = global
