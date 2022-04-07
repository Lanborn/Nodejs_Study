const fs = require('fs')

fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr){
    if(err){
        return console.log('读取失败')

    }
    // console.log('读取成功！' + dataStr)

    // 4.1 按照空格分隔数据
    const arrOld = dataStr.split(' ')
    // console.log(arrOld)
    // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',': '))
    })
    // console.log(arrNew)
    // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    // console.log(newStr)

    fs.writeFile('./files/成绩.txt', newStr, function(err){
        if(err){
            console.log('写入失败' + err.message)
        }
        console.log('写入成功')
    })
})