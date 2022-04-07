const express = require('express')

const app = express()

app.use(express.static('./clock'))

app.listen(3000, ()=>{
    console.log('Server at running http://127.0.0.1:3000')
})