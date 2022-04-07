const express = require('express')

const app = express()

const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false}))

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))

const secretKey = 'lanborn No1 ^_^'

// 注册将jwt字符串还原json对象的中间件
// expressJWT({ secret: secretKey})  就是用来解析 Token 的中间件
// .unless({path: [/^\/api\//]})) 用来指定哪些接口不需要访问权限
app.use(expressJWT({
    secret: secretKey,
    algorithms: ['HS256']
}).unless({ path: [/^\/api\//] }))
  

// 登录接口
app.post('/api/login', function (req, res) {
    // 将 req.body 请求体中的数据，转存为 userinfo 常量
    const userinfo = req.body
    // 登录失败
    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
      return res.send({
        status: 400,
        message: '登录失败！',
      })
    }
    const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
    res.send({
      status: 200,
      message: '登录成功！',
      token: tokenStr, // 要发送给客户端的 token 字符串
    })
  })


// app.post('/api/login', function(req,res){
//     // 将 req.body 请求体中的数据，转存为 userinfo 常量
//     const userinfo = req.body

//     console.log("有人请求了这个登陆接口")
//     // 登录失败
//     if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
//         return res.send({
//         status: 400,
//         message: '登录失败！',
//         })
//     }
//     const tokenStr = jwt.sign({username: userinfo.username}, secretKey, {expiresIn: '30s'})
//     res.send({
//         status: 200,
//         message: '登录成功',
//         // 调用jwt.sign()生成jwt字符串，三个参数分别是：用户信息对象、加密密钥、配置对象(expiresIn 是token字符串的有效期)
//         token: tokenStr,
//     })
// });

app.get('/admin/getinfo', function(req,res){
    console.log(req.user)
    res.send({
        status: 200,
        message: '获取用户信息成功！',
        data: req.user,
    })
});

app.use((err,req,res, next)=>{
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token',
    })
  }
  res.send({
    status: 500,
    message: '未知的错误', 
  })
})

app.listen(80, ()=>{
    console.log("Server running at http://127.0.0.1")
})


