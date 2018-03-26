const fs = require('fs');
let catagorys = [{
        "sonid": 2,
        "cateids": [{
                "name": "东南",
                "cateidsKey":1,
                "imgSrc": "/static/mobile/images/category/jia3@2x.png"
            },{
                "name": "西北",
                "cateidsKey":2,
                "imgSrc": "/static/mobile/images/category/jia2@2x.png"
            },{
                "name": "东北",
                "cateidsKey":3,
                "imgSrc": "/static/mobile/images/category/jia1@2x.png"    
            },{
                "name": "西南",
                "cateidsKey":4,
                "imgSrc": "/static/mobile/images/category/jia4@2x.png"   
            },{
                "name": "中原",
                "cateidsKey":5,
                "imgSrc": "/static/mobile/images/category/jia5@2x.png"   
            }]
        },{
            "sonid": 3,
            "cateids": [{
                "name": "进口零食",
                "cateidsKey":1,
                "imgSrc": "/static/mobile/images/category/jin1@2x.png"
            }]
        },{
            "sonid": 4,
            "cateids": [{
                "name": "液态奶",
                "cateidsKey":1,
                "imgSrc": "/static/mobile/images/category/niu1@2x.png"
            },{
                "name": "蜂蜜",
                "cateidsKey":2,    
                "imgSrc": "/static/mobile/images/category/niu4@2x.png"
            }]    
        },{
            "sonid": 5,
            "cateids": [{
                "name": "坚果炒货",
                "cateidsKey":1,
                "imgSrc": "/static/mobile/images/category/xiu1@2x.png"
            },{
                "name": "膨化食品",
                "cateidsKey":2,    
                "imgSrc": "/static/mobile/images/category/xiu2@2x.png"
            },{
                "name": "饼干糕点",
                "cateidsKey":3,    
                "imgSrc": "/static/mobile/images/category/xiu3@2x.png"
            },{
                "name": "果脯蜜饯",
                "cateidsKey":4,    
                "imgSrc": "/static/mobile/images/category/xiu4@2x.png"
            },{
                "name": "糖果",
                "cateidsKey":5,    
                "imgSrc": "/static/mobile/images/category/xiu5@2x.png"
            },{
                "name": "肉类零食",
                "cateidsKey":6,    
                "imgSrc": "/static/mobile/images/category/xiu6@2x.png"
            },{
                "name": "其他",
                "cateidsKey":7,    
                "imgSrc": "/static/mobile/images/category/xiu7@2x.png"
            }]    
        },{
            "sonid": 6,
            "cateids": [{
                "name": "肉禽",
                "cateidsKey":1,
                "imgSrc": "/static/mobile/images/category/shen1@2x.png"
            },{
                "name": "果蔬",
                "cateidsKey":2,    
                "imgSrc": "/static/mobile/images/category/shen3@2x.png"
            },{
                "name": "蛋类",
                "cateidsKey":3,    
                "imgSrc": "/static/mobile/images/category/shen4@2x.png"
            }]    
        },{
            "sonid": 7,
            "cateids": [{
                "name": "米麦杂粮",
                "cateidsKey":1,    
                "imgSrc": "/static/mobile/images/category/mi1@2x.png"
            },{
                "name": "面粉",
                "cateidsKey":2,    
                "imgSrc": "/static/mobile/images/category/mi2@2x.png"
            },{
                "name": "食用油",
                "cateidsKey":3,    
                "imgSrc": "/static/mobile/images/category/mi3@2x.png"
            },{
                "name": "方便速食",
                "cateidsKey":4,    
                "imgSrc": "/static/mobile/images/category/mi4@2x.png"
            },{
                "name": "干货",
                "cateidsKey":5,    
                "imgSrc": "/static/mobile/images/category/mi5@2x.png"
            },{
                "name": "豆类制品",
                "cateidsKey":6,    
                "imgSrc": "/static/mobile/images/category/mi6@2x.png"
            },{
                "name": "其他",
                "cateidsKey":7,    
                "imgSrc": "/static/mobile/images/category/mi7@2x.png"
            }]    
        },{
            "sonid": 8,
            "cateids": [{
                "name": "鲜调味品",
                "cateidsKey":1,    
                "imgSrc": "/static/mobile/images/category/tiao1@2x.png"
            },{
                "name": "干调味品",
                "cateidsKey":2,    
                "imgSrc": "/static/mobile/images/category/tiao2@2x.png"
            },{
                "name": "酱",
                "cateidsKey":3,    
                "imgSrc": "/static/mobile/images/category/tiao3@2x.png"
            },{
                "name": "调味油",
                "cateidsKey":4,    
                "imgSrc": "/static/mobile/images/category/tiao4@2x.png"
            },{
                "name": "日常调味",
                "cateidsKey":5,    
                "imgSrc": "/static/mobile/images/category/tiao5@2x.png"
            },{
                "name": "腌菜",
                "cateidsKey":6,    
                "imgSrc": "/static/mobile/images/category/tiao6@2x.png"
            },{
                "name": "其他",
                "cateidsKey":7,    
                "imgSrc": "/static/mobile/images/category/tiao7@2x.png"
            }]    
        },{
            "sonid": 9,
            "cateids": [{
                "name": "名酒",
                "cateidsKey":1,    
                "imgSrc": "/static/mobile/images/category/jiu1@2x.png"
            },{
                "name": "功夫水",
                "cateidsKey":2,    
                "imgSrc": "/static/mobile/images/category/jiu2@2x.png"
            },{
                "name": "冲饮",
                "cateidsKey":3,    
                "imgSrc": "/static/mobile/images/category/jiu3@2x.png"
            },{
                "name": "茶叶",
                "cateidsKey":4,    
                "imgSrc": "/static/mobile/images/category/jiu4@2x.png"
            }]    
        }]

module.exports = catagorys;
