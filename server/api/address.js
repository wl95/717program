const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Acmen = require('../Acmen/Acmen').Acmen;
const fs = require('fs');

let mation;
router.use((req, res, next) => {
    mation = {
        message: '登录已过期',
        code:1
    }
    next();
})

// 获取省
router.post('/user/districts/index', function (req, res) {
    let province = [];
    Acmen('/user/districts/index', { key_code: 283766008490462036 }, "POST").then(result => {
        res.end(result);
    })
    /* let cityJson = fs.readFileSync('./mock/city.json');
    JSON.parse(cityJson).forEach((value, index) => {
        province.push({
            name: value.name,
            district_id: index + 2,
            region_type: "1"
        })
    }) */
    
})

// 获取市
router.post('/user/districts/children', function (req, res) {
    let children = [];
    let china = req.body.china;
    let district_id = req.body.district_id;
    Acmen('/user/districts/children', { key_code: 283766008490462036 ,district_id }, "POST").then(result => {
        res.end(result);
    })
})

// 保存用户的配送地址
router.post('/reserve/shipping/address', (req, res) => {
    let token = req.body.token;
    let addressDir = JSON.parse(fs.readFileSync('./mock/ShipAddress.json'));
    jwt.verify(token, 'wl', (err, decode) => {
        if (err) {
            res.end(JSON.stringify(mation));
        } else {
            if (addressDir[decode.username]) {
                addressDir[decode.username].push({
                    aUser: req.body.aUser,
                    aPass:req.body.aPass,
                    dadd:req.body.dadd,
                    isDefaultSite:req.body.isDefaultSite,
                })
            } else {
                addressDir[decode.username] = [{
                    aUser: req.body.aUser,
                    aPass:req.body.aPass,
                    dadd:req.body.dadd,
                    isDefaultSite:req.body.isDefaultSite,
                }]
            }
        }
        fs.writeFile('./mock/ShipAddress.json', JSON.stringify(addressDir), (err) => {
            if (err) {
                mation.message = '收货地址添加失败';
                mation.code = 2;
                res.end(JSON.stringify(mation));
            } else {
                mation.message = '收货地址添加成功';
                mation.code = 0;
                res.end(JSON.stringify(mation));
            }
        })
    })
})

// 获取用户收货地址
router.post('/reserve/shipping/gainAddress', (req, res) => {
    let token = req.body.token;
    let addressDir = JSON.parse(fs.readFileSync('./mock/ShipAddress.json'));
    jwt.verify(token, 'wl', (err, decode) => {
        if (err) {
            res.end(JSON.stringify(mation));
        } else {
            mation.code = 0;
            mation.message = '数据获取成功';
            mation.result = addressDir[decode.username];
            res.end(JSON.stringify(mation));
        }
    })
})

module.exports = router;
