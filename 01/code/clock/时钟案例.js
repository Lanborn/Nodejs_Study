const fs = require('fs')

const path = require('path')

// 定义正则表达式，分别匹配<style></style> 和 <script></script> 标签
// \s表示匹配任意的空白字符，\S表示匹配任意的非空白字符 ， * 表示可以出现任意多次

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './素材/index.html',),'utf8', function(err, dataStr){
    if(err) return console.log('读取失败！' + err.message)

    // 调用三个方法，获取html、css、js
    resolveJS(dataStr)
    resolveHTML(dataStr)
    resolveCSS(dataStr)
})


function resolveCSS(htmlStr){
    // 使用正则表达式提取页面中的 <style></style> 标签
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, './index.css'), newCSS, function(err){
        if(err) return console.log('写入css样式失败！'+err.message)
        console.log('写入样式成功')
    })
};

function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr)

    const newScript = r2[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, './index.js'), newScript, function(err){
        if(err) return console.log('写入js脚本文件失败！'+err.message)
        console.log('写入js脚本文件成功')
    })
}

function resolveHTML(htmlStr){

    const newHTML = htmlStr.replace(regStyle, '<link ref="stylesheet" href="./index.css"></link>').replace(regScript, '<script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname, './index.html'), newHTML,function(err){
        if(err) return console.log('写入html页面失败!' + err.message)

        console.log('写入html页面成功')

    });

}