const express = require('express');
const router = express.Router();
const Acmen = require('../Acmen/Acmen').Acmen;
const catagorys = require('../mock/catagory')

router.post('/mobile/Category/categorySon', (req, res) => {
    catagorys.map(catas => {
        if (catas.sonid == req.body.sonid) {
            res.end(JSON.stringify(catas));
        }
    })
    res.end('服務器有誤');
})

module.exports = router;
