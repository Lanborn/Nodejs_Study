## 安装
```
npm install lCoder-tools
```

## 导入
```js
const lCoder = require('lCoder-tools')
```

## 格式化时间

```js
// 调用dateFormat对时间进行格式化
const dtStr = lCoder.dateFormat(new Date())

console.log(dtStr)
```

## 转义html中的特殊字符

```js

const htmlStr = '<h1 title="abc"> 这是h1标签<span>123&nbsp;</span></h1>'

const str = lCoder.htmlEscape(htmlStr)

console.log(str)
```

## 还原HTML中的特殊字符

```js

const str2 = lCoder.htmlUnEscape(str)

console.log(str2)
```

## 开源协议

ISC

