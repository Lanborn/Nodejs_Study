const express = require('express')
const qs = require('querystring')

const app = express()

app.use((req,res,next)=>{
    let str = ''
    req.on('data', (chunk)=>{
        str += chunk
    })

    req.on('end',()=>{
        // 打印完整的请求体数据
        // console.log(str)
        // TODO: 把字符串格式的请求体数据，解析成对象格式
        const body =  qs.parse(str)
        // console.log(body)
        req.body = body
        next()
    })
})

app.post('/user', (req,res)=>{
    console.log(req.body)
    console.log('OK')
})

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1')
})