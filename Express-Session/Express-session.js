
const express = require('express')

const app = express()

const session = require('express-session')

app.use(session({
    secret: 'cat', // 可以为任意字符串
    resave: false, // 固定写法
    saveUninitialized: true // 固定写法
}))

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

 

// 编写登录接口

app.post('/api/login', (req, res) => {
    if(req.body.username !== 'admin' || req.body.password !== '000000'){
        return res.send({ 
            status: 1,
            msg: '登陆失败'
        })
    }

    req.session.user = req.body // 将用户的信息，存储到Session中
    req.session.islogin = true // 将用户的登录状态，存储到Session中

    res.send({ 
        status: 0, 
        msg: '登陆成功'
    })
})

// 获取用户姓名的接口

app.get('/api/username', (req,res)=>{
    if(!req.session.islogin){
        return res.send({
            status : 1,
            msg: 'fail'
        })
    }
    res.send({ 
        status: 0,
        msg: 'success', 
        username:req.session.user.username
    })
});

// 退出登录

app.post('/api/logout', (req,res)=>{
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1:80')
  })
  