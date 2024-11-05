const path = require('path');

const filePath = path.resolve(__dirname, 'msg.txt'); 

const directory = path.dirname(filePath);
const base = path.basename(filePath);
const extension = path.extname(filePath);
const name = path.basename(filePath, extension);

console.log('Directory:', directory);
console.log('Base:', base);
console.log('Extension:', extension);
console.log('Name:', name);

const completePath = path.join(__dirname, 'public', 'index.html');
console.log('Complete Path:', completePath);
