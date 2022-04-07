const qs = require('querystring')

const bodyParser =  function(req,res,next){
    let str = ''
    req.on('data', (chunk)=>{
        str += chunk
    })

    req.on('end',()=>{
        // 打印完整的请求体数据
        // console.log(str)
        // TODO: 把字符串格式的请求体数据，解析成对象格式
        const body =  qs.parse(str)
        // console.log(body)
        req.body = body
        next()
    })
}

module.exports = bodyParser