const john ='john';
const peter = 'peter';

module.exports = {john, peter}
const names= require('./name')
const sayHi = require('./sayhi')


sayHi(names.john)
sayHi(names.peter)
console.log(names);
