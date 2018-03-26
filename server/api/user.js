const express = require('express');
const router = express.Router();
const fs = require('fs')
const jwt = require('jsonwebtoken')
// 用户注册
router.post('/user/register', function (req, res) {
    let userName = req.body.username;
    let flag = true;
    let execute = {code:0,msg:'注册成功'}
    let userInfo = fs.readFileSync('./mock/userInfo.json', { encoding: 'utf-8' });
    userInfo = JSON.parse(userInfo);
    userInfo.forEach(value => {
        if (value.username === userName) {
            execute.msg = '用户名已存在';
            execute.code = 1;
            flag = false;
        }
    })
    if (flag) {
        userInfo.push(req.body)
        fs.writeFile('./mock/userInfo.json',JSON.stringify(userInfo))   
    }
    res.end(JSON.stringify(execute))
})
// 用户登录
router.post('/user/login', (req, res) => {
    let execute = {code:1,msg:'登录失败',username:''}
    let userInfo = fs.readFileSync('./mock/userInfo.json', { encoding: "utf-8" });
    userInfo = JSON.parse(userInfo)
    let User = req.body;
    userInfo.forEach(value => {
        if (value.username == User.username && value.password == User.password ) {
            execute.code = 0;
            execute.msg = '登陆成功';
            execute.username = User.username;
        }
    })

    if (!execute.code) {
        execute.token = jwt.sign(User, 'wl',{ expiresIn: 60 * 60 * 24 * 3 });
    }
    res.end(JSON.stringify(execute))
})
// 获取当前登录的用户名
router.post('/user/getUserInfo', (req, res) => {
    let toen = req.body.token;
    let execute = { code: 1, msg: '用户名获取有误', username: '' }
    jwt.verify(toen, 'wl', (err, decoded) => {
        if (err) {
            res.end(JSON.stringify(execute))
        } else {
            //console.log(decoded)
            execute.code = 0;
            execute.msg = "获取成功";
            execute.username = decoded.username;
            res.end(JSON.stringify(execute))
        }
    })
})

module.exports = router;