
const {readFileSync, writeFileSync } = require('fs')

const text = readFileSync('./contant/subfolder/text.txt', 'utf8');
console.log(text);

writeFileSync('./contant/subfolder/text.txt', `here is the result: ${text}`, {flag:'a'})