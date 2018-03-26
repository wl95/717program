import React, { Component , Fragment } from 'react'
import './search.css'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchList:[]
        }
        this.toSearchBtn = this.toSearchBtn.bind(this);
        this.toSearchThe = this.toSearchThe.bind(this);
        this.removehistorySearch = this.removehistorySearch.bind(this);
    }
    render() {
        console.log(this.state.searchList)
        return (<Fragment>
            <div className="search_header">
                <div className="searchBox searchTop">
                    <i className="iconfont">&#xe601;</i>    
                    <input type="text" placeholder="请输入你想要的商品" ref="searchInput"/>
                </div>
                <div className="search_btn" onClick={this.toSearchBtn}>搜索</div>
            </div>
            <div className="search_main">
                <p>
                    <span>最近搜索</span>
                    <i className="iconfont icon-delete" onClick={this.removehistorySearch}></i>
                </p>
                {
                    this.state.searchList.length < 1 ? <div className="zanwu">暂无最近搜索...</div> : 
                    <ul className="historySearch">
                        {
                            this.state.searchList.map((value,index) => {
                                return <li key={index} onClick={this.toSearchThe}>{value}</li>
                            })
                        }
                    </ul>    
                }
                
            </div>
        </Fragment>)
    }
    toSearchThe() {
        this.props.history.push('/homepage/searchThe')
    }
    removehistorySearch() {
        localStorage.clear();
        this.setState({
            searchList:[]
        })
    }
    toSearchBtn() {
        let searchInputValue = this.refs.searchInput.value;
        let LSE = localStorage;
        if(!searchInputValue) return
        if (LSE.getItem('historySearch')) {
            let hiS = JSON.parse(LSE.getItem('historySearch'));
            if (hiS.indexOf(searchInputValue) === -1) {
                hiS.push(searchInputValue);
                LSE.setItem('historySearch',JSON.stringify(hiS))
            }
        } else {
            LSE.setItem('historySearch',JSON.stringify([searchInputValue]))
        }
        this.props.history.push('/homepage/searchThe')
        this.refs.searchInput.value = '';
    }
    componentDidMount() {
        if (localStorage.getItem('historySearch')) {
            this.setState({
                searchList:JSON.parse(localStorage.getItem('historySearch'))
            })
        }
    }
}

export default Search;