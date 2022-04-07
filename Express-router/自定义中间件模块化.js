const express = require('express')
const qs = require('querystring')
const bodyParser = require('./custom-bodyparser')

const app = express()

app.use(bodyParser)

app.post('/user', (req,res)=>{
    console.log(req.body)
    console.log('OK')
})

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1')
})