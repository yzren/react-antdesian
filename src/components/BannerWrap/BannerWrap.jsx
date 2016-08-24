import React, { Component } from 'react';
import {Carousel} from 'antd';
import styles from './BannerWrap.less';

const ImgDate=[
  {
    src: require('../../Components/common/gulp.jpg'),
    alt: "img1"
  }, {
    src: require('../../Components/common/webpack.jpg'),
    alt: "img2"
  }, {
    src: require('../../Components/common/react.jpg'),
    alt: "img3"
  }, {
    src: require('../../Components/common/es6.jpg'),
    alt: "img4"
  }, {
    src: require('../../Components/common/git.jpg'),
    alt: "img5"
  }, {
    src: require('../../Components/common/github.jpg'),
    alt: "img6"
  }
]

class BannerWrap extends Component{
  render(){
     var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className:"bannerWrap",
      autoplay:true,
      autoplaySpeed:4000,
      touchMove:false
    };
    console.log(ImgDate.length)
    return (
      <Carousel {...settings} className="bannerWrap">
        {ImgDate.map((v,k)=>(
          <div key={k}><img src={v.src} alt={v.alt}/></div>
          ))}
      </Carousel>
    );
  }
}


export default BannerWrap;
