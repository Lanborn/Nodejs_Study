const mysql = require('mysql')
const express = require('express')

const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的IP
    port: '3306',
    user: 'root',
    password: '123123',
    database: 'my_dbtest'
})

// db.query('SELECT 1', (err, results) => {
//     if(err) return console.log(err.message)
//     console.log(results)
// })

// const sqlStr = 'select * from users'

// db.query(sqlStr, (err, results) => {
//     if(err) return console.log(err.message)
//     console.log(results)
// })

// const user = { username: 'Spider-Man', password: 'pc312'}

// const sqlStr2 = 'insert into users (username,password) values (?,?)'

// db.query(sqlStr2, [user.username, user.password], (err,results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1) console.log('插入数据成功')
// })

// const user = { username: 'Spider-Man2', password: 'pc1232'}

// const sqlStr3 = 'INSERT INTO users SET ?'

// db.query(sqlStr3, user, (err,results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1) console.log('插入数据成功')
// })

// const user = {id: 5,username: 'aaa', password: '000'}

// const sqlStr4 = 'UPDATE users SET username=?, password=? WHERE id= ?'

// db.query(sqlStr4, [user.username, user.password, user.id], (err, results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){ console.log('更新数据成功！')}
// });

// const user = {id: 5,username: 'qqq', password: '111'}

// const sqlStr5 = 'UPDATE users SET ? WHERE id= ?'

// db.query(sqlStr5, [user, user.id], (err, results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){ console.log('更新数据成功！')}
// });

// const sqlStr6 = 'delete from users where id =? '

// // 调用db.query() 执行sql语句 的同时，为占位符指具体值
// /*
//     如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//     如果SQL语句中只有一个占位符，则可以省略数组
// */ 
// db.query(sqlStr6, 5, (err, results)=>{
//     if(err) {return console.log(err.message)}
//     if(results.affectedRows === 1 ){ console.log('删除数据成功')}
// })

db.query('update users set status = ? where id=? ',[1,4], (err,results)=>{
    if(err) {return console.log(err.message)}
    if(results.affectedRows === 1) {console.log('标记删除数据成功')}
})