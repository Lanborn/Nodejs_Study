const http = require('http')

const fs = require('fs')

const path = require('path')

const server = http.createServer()

server.on('request',(req,res)=>{
    const url = req.url
    // const fpath = path.join(__dirname, url)

    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname, '/clock/index.html')
    }
    else{
        fpath = path.join(__dirname, '/clock', url)
    }


    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if(err) return res.end('404 Not fount.')
        // res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(dataStr)
    })
})

server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1')
})