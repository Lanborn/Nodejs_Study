const fs = require('fs')

// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr){
//     if(err){
//         return console.log('读取失败' + err.message)
//     }
//     console.log('读取成功')
// }) 

// fs.readFile('D:\\Node\\01\\code\\files\\1.txt', 'utf8', function(err, dataStr){
//     if(err){
//         return console.log('读取失败' + err.message)
//     }
//     console.log('读取成功')
// }) 

// __dirname 表示当前文件所处的目录
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr){
    if(err){
        return console.log('读取失败' + err.message)
    }
    console.log('读取成功')
})