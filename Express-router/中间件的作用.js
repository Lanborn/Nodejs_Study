const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('123')
    const time = Date.now()

    req.startTime = time
    next()
})

app.get('/',(req,res)=>{
    console.log('调用了/这个路由')
    res.send('Home page' + req.startTime)
});

app.post('/user',(req,res)=>{
    res.send('user page'  + req.startTime)
})

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1')
})