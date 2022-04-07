const express = require('express')

const app = express()

// app.get('/user',(req,res)=>{
//     res.send({name : 'zs', age: 20, gender: "man"})
// })

app.post('/user',(req,res)=>{
    res.send('发送了一次post请求')
})

app.get('/user/:id/:name', (req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
})