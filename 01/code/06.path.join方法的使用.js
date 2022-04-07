const fs = require('fs')
const path = require('path')

// 注意： ../ 会抵消前面的路径

// const pathStr = path.join('/a', '/b/c', '../', './d', 'e')

// console.log(pathStr) 

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf8', function(err, dataStr) {
    if(err){
        return console.log(err.message)
    }
    console.log(dataStr)
})