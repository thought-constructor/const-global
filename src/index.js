function Global(F, e) {
	try { return F('return this')() || (1, e)('this') }
	catch (error) { return window }
}

const global = Global(Function, eval)

export {global, global as GLOBAL}
export default global
