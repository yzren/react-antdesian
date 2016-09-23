import React ,{ Component } from 'react';
import {Row , Col , Tooltip } from 'antd';
import styles from './PublishedArticles.less'
import ReactMarkdown from 'react-markdown'

var input = '# dcsdcs \n ';
class PublishedArticles extends Component{
	constructor(props){
		super(props);
		this.state={
			src:'',
		}
		this._handleHover=this.handleHover.bind(this);//显示微信图片
	}
	handleHover(e){
		this.setState({
			src: <img src={require('../../components/common/code.jpg')} style={{width:"100%"}}/>
		})
	}
	render(){
		return (
			<div className="antd-con-wrap">
				<Row>
					<Col xm={24} sm={24} md={17} lg={17}>
						<div className={styles.publicTextarea}>
							<ReactMarkdown source={input} />,
						</div>
					</Col>
					<Col xm={24} sm={24} md={7} lg={7}>
						<div className="antdrightWrap">
					         <ul>
					            <li>
					              <h3>关于博客</h3>
					              <p>FrontEnd博客，是Yzren个人技术博客，主要记录和总结前端工作中常用的知识及我的生活。  订阅博客文章，请关注下方微信号，后期会通过订阅号将文章发送到您的手机上。  本博客所有内容若需转载请联系我。</p>
					              <div className="antdContact">
					                <h4>联系方式</h4>
					                <div className="antdChatIcon">
					                    <Tooltip title="加入QQ">
					                            <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=906618352&amp;site=qq&amp;menu=yes" target="_blank"></a>
					                    </Tooltip>
					                    <Tooltip title="订阅到邮箱" className="antdRightCode">
					                            <a href="javascript:void(0)"></a>
					                    </Tooltip>
					                    <Tooltip title={this.state.src}>
					                            <a href="javascript:void(0)" onClick={this._handleHover}></a>
					                    </Tooltip>
					                    <Tooltip title="关注微博">
					                            <a href="http://weibo.com/5745651140/profile?topnav=1&wvr=6&is_all=1" target="_blank"></a>
					                    </Tooltip>
					                </div>
					              </div>
					            </li>
					         </ul>
					          <div className="antd-hot-labels">
					            <div>
					              <h3>热门标签</h3>
					              <div>
					                  <a href="javascript:viod(0)">React Native </a><a href="javascript:viod(0)">Node</a><a href="javascript:viod(0)">命令行</a><a href="javascript:viod(0)">旅行喵</a><a href="javascript:viod(0)">reactnative</a><a href="javascript:viod(0)">TextInputos项目集成</a><a href="javascript:viod(0)">样式</a><a href="javascript:viod(0)">react-native</a><a href="javascript:viod(0)">首屏渲染</a><a href="javascript:viod(0)">native</a><a href="javascript:viod(0)">CSS3</a><a href="javascript:viod(0)">画基本图形</a><a href="javascript:viod(0)">Iterm2</a><a href="javascript:viod(0)">Mac</a><a href="javascript:viod(0)">react-router</a><a href="javascript:viod(0)">路由系统</a><a href="javascript:viod(0)">模拟器</a><a href="javascript:viod(0)">iOS</a><a href="javascript:viod(0)">生命周期</a><a href="javascript:viod(0)">React</a><a href="javascript:viod(0)">解密</a><a href="javascript:viod(0)">setStatereact</a><a href="javascript:viod(0)">diff</a><a href="javascript:viod(0)">Web缓存</a><a href="javascript:viod(0)">ES6</a><a href="javascript:viod(0)">十大特性</a><a href="javascript:viod(0)">yum安装mysql</a><a href="javascript:viod(0)">安装node/</a><a href="javascript:viod(0)">performanceWebpack</a>
					                </div>
					            </div>
					          </div>
					      </div>
					</Col>
				</Row>
			</div>
		)
	}	
} 

export default PublishedArticles;