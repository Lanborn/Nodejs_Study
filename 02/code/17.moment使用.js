
// import moment from 'moment'
// 使用import导入的时候在外部需要在package中声明："type":"module"
const moment = require('moment')

const dt = moment().format("YYYY-MM-DD HH:mm:ss")

console.log(dt)