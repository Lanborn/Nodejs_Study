const express = require('express')

const app = express()

const mw1 = (req,res,next)=>{
    console.log('中间件函数')
    next()
}

app.get('/', mw1, (req,res)=>{
    res.send('Home Page')
})

app.get('/user', (req,res)=>{
    res.send('User Page')
});

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1')
})