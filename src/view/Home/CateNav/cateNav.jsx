import React, { Component , Fragment } from 'react'

import './cateNav.less'
// home页轮播下的Nav
class CateNav extends Component {
    render() {
        let { cateNav } = this.props;
        return (
            <div className="cateNav">
                {
                    cateNav.map(value => {
                        return <dl key={value.id} className="catagorys">
                            <dt><i className={"iconfont " + value.icon}></i></dt> 
                            <dd>{value.navs}</dd>
                        </dl>
                    })
                }    
            </div>
        )
    }
}

export default CateNav;