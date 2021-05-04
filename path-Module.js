const path = require('path')

console.log(path.sep);
const filepath = path.join('/contant', 'subfolder', 'text.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname, 'contant','subfolder', 'text.txt')
console.log(absolute);