const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 设置跨域
app.all('*', function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Content-Type,Token")
    res.header('Content-Type', "application/json;charset=utf-8")
    next();
})

app.use('/users',require('./api/user'))             // 用户
app.use('/commodity',require('./api/commodity'))    // 购物车
app.use('/catagory',require('./api/catagory'))      // 商品分类
app.use('/city',require('./api/address'))      // 城市联动

app.listen(8000, console.log('listen is 8000'));