// fs
const fs = require('fs')
// 读取一个文件
const data = fs.readFileSync('./conf.js'); // 阻塞操作
console.log("1",data);

// 异步版本
fs.readFile('./conf.js', (err, data)=>{
    console.log("2",data);
})
console.log('其他操作');

// promise
const {promisify} = require('util')
const readFile = promisify(fs.readFile)
readFile('./conf.js').then(data=>console.log("3",data))

// v10.0
// fs Promises API
const {promises} = require('fs');
promises.readFile('./conf.js').then(data=>console.log("4",data.toString()))

// generator
// async await
