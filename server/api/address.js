const express = require('express');
const router = express.Router();
const Acmen = require('../Acmen/Acmen').Acmen;
const fs = require('fs');

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
    console.log(district_id)
    Acmen('/user/districts/children', { key_code: 283766008490462036 ,district_id }, "POST").then(result => {
        res.end(result);
    })
})

module.exports = router;
