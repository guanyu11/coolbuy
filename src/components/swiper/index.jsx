import React, { Component } from 'react'
import { HomeBanner } from "./styled"
import AwesomeSwiper from 'react-awesome-swiper';

const config = {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
   
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
    },
    on: {
        slideChange: function () {
            console.log(this.activeIndex);
        },
    },
};
class Banner extends Component {
    render() {
        console.log(this.props)
        let banner = this.props.banner
        return (
            <HomeBanner>
                <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="your-classname">
                    <div className="swiper-wrapper">
                        {
                            banner.length > 0 ? banner.map((item) => (
                                <div key={item.id} className="swiper-slide">
                                    <img src={item.image}
                                        /></div>
                            )) : ''
                        }

                    </div>

                    <div className="swiper-pagination"></div>
                </AwesomeSwiper>
            </HomeBanner>
        )
    }
}

export default Banner