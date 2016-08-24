import React, {
  Component
}
from 'react';
import {
  Row, Col,Timeline,Icon
}
from 'antd';
import RightWrap from '../../components/RightWrap/RightWrap';
import aboutStyles from './AboutMe.less';

class Javasrcipt extends Component {
  render() {
    return (
     <div className="antd-con-wrap">
     	<Row>
     		<Col xm={24} sm={24} md={17} lg={17}>
            <div className={aboutStyles.aboutTimeLine}>
              <Timeline>
                  <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize:"16px"}}/>} color="red">
                    <span>2016/02/17 —— 至今</span>
                    <p>乐视新生代（北京）文化传媒有限公司</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <span>2014/11/11 —— 2016/02/17</span>
                    <p>软通动力有限公司</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <span>2014/2/10 —— 2014/11/11</span>
                    <p>达达辛巴达有限公司</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <span>2013/2/10 —— 2013/11/11</span>
                    <p>网即通科技有限公司</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    2013-07-10毕业于河南焦作大学
                  </Timeline.Item>
              </Timeline>
            </div>
     		</Col>
     		<Col xm={24} sm={24} md={7} lg={7}>
				<RightWrap />
     		</Col>
     	</Row>
     </div>
    )
  }
}

export default Javasrcipt;