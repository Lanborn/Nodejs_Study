const express = require('express')

const router = express.Router()

router.get('/user/list', (req,res)=>{
    console.log('Get user list')
});

router.post('/user/add', (req,res)=>{
    console.log('Add new user')
})

module.exports = router