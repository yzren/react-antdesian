import React,{Component} from 'react';
import {Row , Col} from 'antd';
import styles from './IndexConWrap.less';
import BannerWrap from '../../components/BannerWrap/BannerWrap';
import MainWrap from '../../components/MainWrap/MainWrap';

class IndexWrap extends React.Component{
  render(){
    return(
      
          <div className="antdIndexCon">
            <BannerWrap/>
            <MainWrap/>
          </div>
  
    )
  }
}



export default IndexWrap