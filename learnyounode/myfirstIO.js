let fs = require('fs');

let filename = process.argv[2];

file = fs.readFileSync(filename);

console.log(file.toString().split('\n').length-1);