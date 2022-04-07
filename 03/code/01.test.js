const lCoder = require('./lCoder-tools')

const dtStr = lCoder.dateFormat(new Date())

console.log(dtStr)

console.log('-------------')

const htmlStr = '<h1 title="abc"> 这是h1标签<span>123&nbsp;</span></h1>'

const str = lCoder.htmlEscape(htmlStr)

console.log(str)

console.log('------------')

const str2 = lCoder.htmlUnEscape(str)

console.log(str2)