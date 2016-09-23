/*globals COURSES:true */
import React, { Component } from 'react'
import {Row ,Col} from 'antd';
import ListLeftWrap from '../ListLeftWrap/ListLeftWrap';
import RightWrap from '../RightWrap/RightWrap';

class es6React extends Component{
  render(){
    return(
        <div className="antd-con-wrap">
          <Row>
            <Col xm={24} sm={24} md={17} lg={17} >
              <ListLeftWrap/>
            </Col>
            <Col xm={24} sm={24} md={7} lg={7} >
            <RightWrap/>
            </Col>
          </Row>
        </div>
      )
  }
}

export default es6React;
