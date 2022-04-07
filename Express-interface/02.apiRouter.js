const express = require('express')

const apiRouter = express.Router()

apiRouter.get('/get', (req,res)=>{
    const query = req.query

    res.send({
        status : 0,  // 0 - 成功 1-失败
        msg: 'GET请求成功',
        data: query
    })
})

apiRouter.post('/post',(req,res)=>{
    // 获取客户端通过请求体，发送到服务器的URL-encoded数据
    const body = req.body
    // 调用res.send()方法，把数据响应给客户端
    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data: body
    })

})



module.exports = apiRouter
