const fs = require('fs')

const data=fs.readFileSync('./txt/input.txt','utf-8');

console.log(data);

const textOut=`This is how we write data to a new file.${data}`;
fs.writeFileSync('./txt/output.txt',textOut)

console.log('File written');