const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const url = require('url');
const Acmen = require('../Acmen/Acmen').Acmen;

// 获取商品列表
router.post('/mall/index/getGoodsChannel', function (req,res) {
    Acmen('/mall/index/getGoodsChannel', req.body, "POST").then(result => {
        res.end(result)
    })
})

// 添加购物车
router.post('/user/Cart/addCart', function (req, res) {
    let token = req.body.token;
    let shops = req.body.productList;
    
    let mation = {
        message: '添加购物车有误',
        code:1
    }
    let shoppingDir = JSON.parse(fs.readFileSync('./mock/shopping.json',{ encoding:'utf-8' }));
    jwt.verify(token, 'wl', (err, decoded) => {
        if (err) {
            message: '登录失败';
            res.end(JSON.stringify(mation));
        } else {

            if (shoppingDir[decoded.username]) {
                let recordList = shops;
                let pushPlag = false;
                shoppingDir[decoded.username].forEach(value => {
                    if (value.goods_id === recordList.goods_id) {
                        ++value.count;
                        pushPlag = true;
                    }
                })
                if (!pushPlag) {
                    let record = shops;
                    record.count = 1;
                    record.choiceChecked = false;
                    shoppingDir[decoded.username].push(shops);
                }
            } else {
                let record = shops;
                record.count = 1;
                record.choiceChecked = false;
                shoppingDir[decoded.username] = [record];
            }
            //console.log(shoppingDir)
            fs.writeFile('./mock/shopping.json', JSON.stringify(shoppingDir), (err) => {
                if (err) {
                    res.end(JSON.stringify(mation));
                } else {
                    mation.message = "添加购物车成功";
                    mation.code = 0;
                    res.end(JSON.stringify(mation));
                }
            });
        }
    })
    
})

// 获取购物车商品
router.get('/mall/goods/recommendgoods', function (req, res) {
    let token = url.parse(req.url, true).query.token;
    let mation = {
        message: '数据请求失败',
        code: 1,
        data:[]
    }
    let shoppingDir = JSON.parse(fs.readFileSync('./mock/shopping.json', { encoding: 'utf-8' }));
    
    jwt.verify(token, 'wl', (err, decoded) => {
        if (err) {
            res.end(JSON.stringify(mation))
        } else {
            mation.data = shoppingDir[decoded.username];
            mation.code = 0;
            mation.message = '数据请求成功';
            res.end(JSON.stringify(mation))
        }
    })
})

// 删除商品
router.post('/mall/goods/removeCart', (req, res) => {
    let mation = {
        message: '删除失败',
        code: 1,
        data:[]
    }
    let EditorGoodId = req.body.EditorGoodId;
    let token = req.body.token;
    let shoppingDir = JSON.parse(fs.readFileSync('./mock/shopping.json', { encoding: 'utf-8' }));
    jwt.verify(token, 'wl', (err, decoded) => {
        if (err) {
            res.end(JSON.stringify(mation))
        } else {
            let cartList = shoppingDir[decoded.username]
            if (cartList) {
                // 保留除删除以外的数据
                cartList.forEach(value => {
                    EditorGoodId.forEach(val => {
                        if (value.goods_id !== val) {
                            mation.data.push(value);
                        }
                    })
                })
                shoppingDir[decoded.username] = mation.data;
                fs.writeFile('./mock/shopping.json', JSON.stringify(shoppingDir), (err) => {
                    if (err) {
                        res.end(JSON.stringify(mation));
                    } else {
                        mation.message = "删除成功";
                        mation.code = 0;
                        res.end(JSON.stringify(mation));
                    }
                });
            }
            
        }
    })
})

// 获取商品数量
router.get('/user/Cart/countCart', (req, res) => {
    let mation = {
        message: '数据请求失败',
        code: 1,
        data:0
    }
    let token = url.parse(req.url, true).query.token;
    let shoppingDir = JSON.parse(fs.readFileSync('./mock/shopping.json', { encoding: 'utf-8' }));
    jwt.verify(token, 'wl', (err, decoded) => {
        if (err) {
            res.end(JSON.stringify(mation))
        } else {
            let sum = 0;
            if (shoppingDir[decoded.username] && shoppingDir[decoded.username].length) {
                shoppingDir[decoded.username].forEach(value => {
                    sum += value.count;
                })
                mation.data = sum;
                mation.code = 0;
                mation.message = '数据请求成功';
                res.end(JSON.stringify(mation))
            } 
        }
    })
})

// 加减商品
router.post('/mall/goods//setCount', (req, res) => {
    let goodId = req.body.goodId;
    let token = req.body.token;
    let count = req.body.count;
    let mation = {
        message: '暂无数据不能加减',
        code: 1
    } 
    let shoppingDir = JSON.parse(fs.readFileSync('./mock/shopping.json', { encoding: 'utf-8' }));
    jwt.verify(token, 'wl', (err, decoded) => {
        if (err) {
            res.end()
        }
        if (shoppingDir[decoded.username]) {
            shoppingDir[decoded.username].forEach(value => {
                if (value.goods_id === goodId) {
                    value.count = count;
                }
            })
        }
        fs.writeFile('./mock/shopping.json', JSON.stringify(shoppingDir), (err) => {
            if (err) {
                res.end(JSON.stringify(mation));
            } else {
                mation.message = "请求成功";
                mation.code = 0;
                res.end(JSON.stringify(mation));
            }
        });
    })
})

module.exports = router;