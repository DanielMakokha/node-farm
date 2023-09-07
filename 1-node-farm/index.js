const fs = require('fs')

// const data=fs.readFileSync('./txt/input.txt','utf-8');

// console.log(data);

// const textOut=`This is how we write data to a new file.${data}`;
// fs.writeFileSync('./txt/output.txt',textOut)

// console.log('File written');

//Non-Blocking asynchronous code

fs.readFile('./txt/start.txt','utf-8',(err,data1) =>{
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) =>{
        console.log(data2);
        fs.readFile(`./txt/append.txt`,'utf-8',(err,data3) =>{
            console.log(data3);
            fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`,'utf-8',(err) =>{
                console.log('Data has been saved');
            });
        });
    });
    });
console.log('File has been read');