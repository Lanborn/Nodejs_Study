const express = require('express')

const app = express()

const apiRouter = require('./02.apiRouter')

app.use(express.urlencoded({extended: false}))

app.get('/api/jsonp',(req,res)=>{
    const funcName = req.query.callback
    // 得到要通过JSONP形式发送给客户端的数据
    const data = { name: 'zs', age: 22}
    // 根据前两步得到的数据。拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 把上一步拼接得到的字符串。响应给 客户端的<Script>标签解析执行
    res.send(scriptStr)
})

const cors = require('cors')
app.use(cors())

app.use('/api', apiRouter)

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1')
})