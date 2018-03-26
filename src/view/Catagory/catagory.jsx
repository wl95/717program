import React, { Component ,Fragment } from 'react'
import $http from '../../utils/http'
import './catagory.less'

class Catagory extends Component {
    constructor() {
        super();
        this.state = {
            catagorysKey:2,
            catagoryRight:[]
        }
        this.toSearch = this.toSearch.bind(this);
        this.onCatagoryActive = this.onCatagoryActive.bind(this);
    }
    render() {
        let CatagoryList = [{
            name:"家乡味道",
            key:2
        },{
            name:"进口食物",
            key:3
        },{
            name:"牛奶乳品",
            key:4
        },{
            name:"休闲零食",
            key:5
        },{
            name:"生鲜果蔬",
            key:6
        },{
            name:"米面粮油",
            key:7
        },{
            name:"调味调料",
            key:8
        },{
            name:"酒水饮料",
            key:9
        },]
        return (
            <Fragment>
                <header className="catagoryHeader" style={{height:"1rem"}}>
                    <div className="searchBox" style={{ margin: "0 auto", borderRadius: ".2rem", flex: .9}}>
                        <i className="iconfont">&#xe601;</i>    
                        <input type="text" placeholder="请输入你想要的商品" onFocus={(e) => { this.toSearch(); e.stopPropagation();}}/>
                    </div>
                </header>
                <div className="catagorMain">
                    <ul className="catagorMain_left">
                        {
                            CatagoryList.map(catagorys => {
                                return <li key={catagorys.key} className={this.state.catagorysKey == catagorys.key ? "catagoryActive" : ''} onClick={() => {this.onCatagoryActive(catagorys.key)}}>{catagorys.name}</li>
                            })
                        }
                    </ul>
                    <div className="catagorMain_right">
                        {
                            this.state.catagoryRight.map(catagoryValue => {
                                return <dl key={catagoryValue.cateidsKey}>
                                    <dt><img src={"http://www.lb717.com" + catagoryValue.imgSrc}/></dt>
                                    <dd>{catagoryValue.name}</dd>
                                </dl>
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        $http.post('/catagory/mobile/Category/categorySon',{sonid:2}).then(res => {
            this.setState({
                catagoryRight:res.cateids
            })
        })
    }
    onCatagoryActive(catagorysKey){
        this.setState({
            catagorysKey
        })
        $http.post('/catagory/mobile/Category/categorySon',{sonid:catagorysKey}).then(res => {
             this.setState({
                catagoryRight:res.cateids
            })
        })
    }
    toSearch() {
      
    }
}

export default Catagory;