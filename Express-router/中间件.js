const express = require('express')

const app = express()

// const mw = function(req, res, next) {
//     console.log('这是一个最简单的中间件函数')
//     next()
// }

// app.use(mw)

app.use(function(req,res,next) {
    console.log('这是')
    next()
})

app.get('/',(req,res)=>{
    console.log('调用了/这个路由')
    res.send('Home page')
});

app.post('/user',(req,res)=>{
    res.send('user page')
})

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1')
})