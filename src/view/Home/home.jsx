import React, { Component ,Fragment } from 'react'
import $http from '../../utils/http'
import Swiper from '../../components/Swiper/swiperWrap'
import ProductList from '../../components/ProductList/productList'
import { homeSwiperData } from '../../utils/homeSwiperImg'
import './home.less'

import CateNav from './CateNav'

class Home extends Component{
    constructor() {
        super();
        this.state = {
            productList: [],
            channel_id: 3,
            flag: true,
            bottonMsg:false
        }
        this.homeWrapScroll = this.homeWrapScroll.bind(this);
        this.toSearch = this.toSearch.bind(this);
    }
    render() {
        let { routers } = this.props;
        let cateNav = [{
            id:1,
            icon: "icon-apparel",
            navs:"牛奶乳品"
        }, {
            id:2,    
            icon: "icon-qiche",
            navs:"家乡味道"
        }, {
            id:3,    
            icon: "icon-qinggan",
            navs:"休闲零食"
        }, {
            id:4,    
            icon: "icon-boat",
            navs:"米面粮油"
        }, {
            id:5,    
            icon: "icon-meishi",
            navs:"调味调料"
        }, {
            id:6,    
            icon: "icon-atm2",
            navs:"酒水饮料"
        }, {
            id:7,    
            icon: "icon-icon34",
            navs:"生鲜果蔬"
        }, {
            id:8,    
            icon: "icon-ship",
            navs:"进口食品"
            }]
        
        return (
            <div onScroll={this.homeWrapScroll} ref="homeWrap" id="homeWrap">
                <div ref="homeContent" className="homeContent">    
                    <header className="homeHeader">
                        <div className="logo">Logo</div>    
                        <div className="searchBox">
                            <i className="iconfont">&#xe601;</i>    
                            <input type="text" placeholder="请输入你想要的商品" onFocus={(e) => { this.toSearch(); e.stopPropagation();}}/>
                        </div>
                        <div className="homeShop">
                            <i className="iconfont icon-wxbmingxingdianpu"></i>
                            <span>我的店铺</span>
                        </div>
                    </header>
                    <Swiper homeSwiperData={homeSwiperData}/>
                    <CateNav cateNav={cateNav}/>
                    <div className="product">
                    {
                        this.state.productList.map((values,index) => {
                            return <ProductList key={index} productList={values} history={this.props.history} location={this.props.location}/>
                        })
                    }
                    </div>    
                    {
                        this.state.bottonMsg ? <div style={{textAlign:"center",fontSize:".34rem",lineHeight:'.6rem'}}>已经没有数据了。。。</div> :''
                    }
                </div>    
            </div>    
        )
    }
    toSearch() {
        let { history, location } = this.props;
        history.push('/homepage/search', {
            from:location.pathname
        })
    }
    homeWrapScroll() {
        if (!this.state.flag || this.state.channel_id > 8) { this.setState({ bottonMsg: true });return} ;
        let { homeWrap ,homeContent } = this.refs;
        let homeWrapST = homeWrap.scrollTop;
        let homeWrapOH = homeWrap.offsetHeight;
        let homeContentOH = homeContent.offsetHeight;
        if (homeContentOH - (homeWrapST + homeWrapOH) < 50) {
            this.setState({
                flag:false
            })
            this.setState({
                channel_id:++this.state.channel_id
            })
            $http.post('/commodity/mall/index/getGoodsChannel', { channel_id:this.state.channel_id })
                .then(result => {
                    this.setState({
                        productList: [...this.state.productList, ...JSON.parse(result).data.data],
                        flag:true
                    })
                })
            //console.log(this.state.productList)
        }
       
    }
    componentDidMount() {
        //http://www.lb717.com/mall/index/getGoodsChannel?id=1&name=ncx&aksdja
        $http.post('/commodity/mall/index/getGoodsChannel', { channel_id:this.state.channel_id })
        .then(result => {
            this.setState({
                productList:JSON.parse(result).data.data
            })
        })
    }

}

export default Home;