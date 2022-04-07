const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log(1)
    next()
})

app.use((req,res,next)=>{
    console.log(2)
    next()
})
app.get('/',(req,res)=>{
    res.send('Home page')
})

app.post('/user',(req,res)=>{
    res.send('user page')
})

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1')
})