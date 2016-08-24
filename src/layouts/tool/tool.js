import React, {
  Component
}
from 'react';
import {
  Row, Col, Card
}
from 'antd';
import RightWrap from '../../components/RightWrap/RightWrap';
import toolStyles from './tool.less';



class Javasrcipt extends Component {
  render() {
    return (
     <div className="antd-con-wrap">
     	<Row>
     		<Col xm={24} sm={24} md={17} lg={17}>
	     		<div className={toolStyles.antdToolCardWrap}>
	     			<Row gutter={30} >
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdTool}>
	     					<a href="http://tool.oschina.net/jscompress" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <img src={require("../../components/common/01.jpg")}/>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7}>
	     					<a href="http://cli.im/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <img src={require("../../components/common/02.jpg")}/>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://www.w3school.com.cn/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	w3school
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://www.gulpjs.com.cn/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	Gulp
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="https://github.com/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	GitHub
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://webpackdoc.com/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	WebPack
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://www.w3cplus.com/sassguide/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	SASS
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://koala-app.com/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	Koala
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://ant-tool.github.io/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	Ant-Tool
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://echarts.baidu.com/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	Echarts
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://validform.rjboy.cn/" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	Validform
								      </span>
								    </div>
	     					</a>
	     				</Col>
	     				<Col xm={24} sm={24} md={7} lg={7} className={toolStyles.antdToolBg}>
	     					<a href="http://kindeditor.net/demo.php" target="_blank">
	     						 <div className={toolStyles.antdToolCard}>
								      <span>
								      	Kindeditor
								      </span>
								    </div>
	     					</a>
	     				</Col>

	     			</Row>
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