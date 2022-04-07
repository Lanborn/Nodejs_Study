// 这是包的入口文件

// 时间格式化函数
const dateFormat = require("./src/dateFormat")
// 转义html字符的函数

const escape  = require("./src/htmlEscape")


module.exports = {
    ...dateFormat,
    ...escape
}