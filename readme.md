/* 
*  @Author: mikey.wangliang 
*  @Date: 2018-03-23 16:34:55 
 * @Last Modified by: mikey.wangliang
 * @Last Modified time: 2018-03-26 14:41:20
* /

> React 717项目 该项目同时会对一些知识点进行实践。

### Usage
```
# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
### Tech Stack

- [x] 打包构建：Babel Webpack(3.x)
- [x] 热更新
- [x] 包管理：Yarn || Npm
- [x] UI库：React & React-Dom(16.2.0)
- [x] UI组件：Antd(3.3.0) antd-mobile(2.1.6)
- [x] 路由：react-router-dom(4.2.2)、react-redux
- [x] JS：ES6、ES7
- [x] 样式：less
- [x] 状态管理：redux
- [x] Ajax：Fetch

### Features
*  主页模块
    * http.request,跨域请求在线数据
    * redux 流实现数据的获取
*  搜索模块
    * 实现展示商品历史搜索
*  分类模块
    * 自行模拟的mock数据
    * 实现商品分类切换
    * 用 redux 实现了数据管理
*  购物车模块
    * 准确的识别用户信息，将当前用户购买的商品添加进购物车
    * 实现没有数据时显示购物车为空
    * 实现商品的加减 计算总价 商品的删除 
    * 用 redux 实现了数据管理
* 我的模块
    * 准确的识别用户信息，并显示当前用户名
    * 判断是否登录如果没有登录回立即调到登录页面
* 登录注册模块
    * 与node中的express相结合来处里用户的注册与登录
* 收货地址
    * 实现新增收货地址实时获取当前用户的收货地址  // 效果正在开发中
    * 设置默认地址                             // 效果正在开发中
    * 省市县三级联动
    * 编辑收货地址以及删除收货地址               // 效果正在开发中 

### Project Structure

```

├── build.js                   项目打包后的文件
├── config                     webpack配置文件
│   ├──...
│   ├──webpack.dev.js          开发环境配置
│   ├──webpack.build.js        生产环境配置
├── node_modules               node模块目录
├── public
│   └──index.html
├── server
│   ├── Acmen
|   │   └── Acmen.js           获取717官方数据以及fetchJsonp
│   ├── api
│   │   ├── address.js         收货地址的node逻辑
│   │   ├── catagory.js        列表的node逻辑
│   │   ├── commodity.js       购物车的node逻辑
│   │   └── user.js            用户登录注册的node逻辑
│   ├── mock
│   │   ├── catagory.js        列表数据
│   │   ├── city.js            城市数据
│   │   ├── shopping.js        购物车数据
│   │   └── userInfo.js        用户数据
│   └── app.js                 node服务              
├── src
│   ├── components             项目中的组件
│   │   ├── ActionSheet        弹框组件
│   │   ├── Button             按钮组件
│   │   ├── EveryCart          购物车商品组件
│   │   ├── Header             头部组件
│   │   ├── Input              Input组件
│   │   ├── ProductList        首页商品列表组件
│   │   ├── Radio              单选按钮组件
│   │   ├── Select             select组件
│   │   ├── Swiper             轮播图组件
│   │   └── index.js           export导出所有组件   // 具体导出请以实际项目为主
│   ├── css                    全局样式
│   ├── images                 图片
│   ├── router                 路由配置
│   ├── store                  redeux配置文件       // redux-devTools 遇到报错暂未实现
│   ├── utils                  工具类       
│   │   ├── homeSwiperImg.js   swiper工具
│   │   ├── fonstSet.js        rem计算工具
│   │   └── http.js            featch模块     
│   ├── view                   功能组件       
│   ├── app.js                 主路由
│   ├── main.js                项目入口
│   └── theme                  项目的整体色系   
├── .babelrec                  babel配置
├── package.json
├── README.md
└── yarn.lock

```


