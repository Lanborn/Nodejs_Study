const http = require('http')

const server = http.createServer();

server.on('request', (req,res)=>{
    const str = `您请求的url地址是 ${req.url}, 请求的method是${req.method}`

    // 调用res.setHeader()方法，设置Content-Type响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    res.end(str)
})

server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1')
});