/*globals COURSES:true */
import React, { Component } from 'react';
import {Row,Col} from 'antd';
import DetailWrap  from '../../components/Detail/DetailCom';
import RightWrap  from '../../components/RightWrap/RightWrap';

class Detail extends Component {
  render() {
    return (
     <div className="antd-con-wrap">
     	 <Row>
	      	<Col xm={24} sm={24} md={17} lg={17}>
	      		<DetailWrap />
	      	</Col>
	      	<Col xm={24} sm={24} md={7} lg={7}>
	      		<RightWrap/>
	      	</Col>
      </Row>
     </div>
    )
  }
}

export default Detail;
