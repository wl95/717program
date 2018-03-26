import React, { Component } from 'react'
import Swiper from 'swiper'
class SwiperComponent extends Component {
    render() {
        let { homeSwiperData } = this.props;
        return (
            <div className="swiper-container banner">
                <div className="swiper-wrapper">
                    {
                        homeSwiperData.map(value => {
                            return <div className="swiper-slide" key={value.key}>
                                <a href={value.href}>    
                                    <img src={"http://www.lb717.com" + value.swiperSrc} />
                                </a>    
                            </div>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )        
    }

    componentDidMount() {
        let BannerSwiper = new Swiper('.banner',{
            autoplay: {
                disableOnInteraction: false,
                delay: 3000
            },
            pagination: {
                el: ".swiper-pagination",
                clickable:true
            },
            loop:true
        })
    }
}

export default SwiperComponent;