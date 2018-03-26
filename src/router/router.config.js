import React, { Component } from 'react'

// 一级路由
import Login from '../view/Login'               // 登陆
import Register from '../view/Register'         //注册
import Detail from '../view/Detail'             //详情
import HomePage from '../view/Homepage'         //主路由页
import Setting from '../view/Setting'           //设置页
import Address from '../view/Address'           //收货地址
import AddAddress from '../view/AddAddress'     //添加收货地址

// 二级路由
import Home from '../view/Home'                 //主页
import Catagory from '../view/Catagory'         //分类页
import Mine from '../view/Mine'                 //我的
import List from '../view/List'                 
import Cart from '../view/Cart'                 //购物车
import Search from '../view/Search'             //搜索页
import SearchThe from '../view/SearchThe'       //搜索到商品页

let router = {
    routers: [
        {
            path: "/homepage",
            name: 'homepage',
            component: HomePage,
            children: [{
                path: "/homepage/home",
                name:"home",
                component:Home
            },{
                path: "/homepage/catagory",
                name:"catagory",    
                component:Catagory
            },{
                path: "/homepage/cart",
                name:"cart",    
                component: Cart,
                authorization:true
            },{
                path: "/homepage/mine",
                name:"mine",    
                component: Mine,
                authorization:true
            },
            {
                path: "/homepage/search",
                name: 'search',
                component:Search
            },
            {
                path: "/homepage/searchThe",
                name: 'searchThe',
                component:SearchThe
            }]
        },
        {
            path: "/detail",
            name:"detail",
            component:Detail
        },
        {
            path: "/login",
            name: 'login',
            component:Login
        },
        {
            path: "/register",
            name: 'register',
            component:Register
        }, {
            path: "/setting",
            name: 'setting',
            component:Setting
        }, {
            path: "/address",
            name: 'address',
            authorization:true,
            component:Address
        }, {
            path: "/addAddress",
            name: 'addAddress',
            authorization:true,
            component:AddAddress
        }
    ]
}
export default router;