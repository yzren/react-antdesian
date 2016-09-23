import ReactDOM from 'react-dom';
import React,{Component} from 'react';

import {Row , Col , Tooltip,Input,Button,Tabs} from 'antd';

import classNames from "classNames";
import BannerWrap from '../BannerWrap/BannerWrap';
import  rightStyle  from './rightWrap.less';
const InputGroup=Input.Group;
const TabPane=Tabs.TabPane;
class RightWrap extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      focus:false,
      src:'',
    }
    this._handleInputChange=this.handleInputChange.bind(this);//input内容改变的时候
    this._handleInputFocus=this.handleInputFocus.bind(this);//input 获取到焦点
    this._handleSearch=this.handleSearch.bind(this);//搜索框
    this._handleTabs=this.handleTabs.bind(this);//tabs标签切换
    this._handleHover=this.handleHover.bind(this);//显示微信图片
  }

  handleInputChange(e){
    this.setState({
      value:e.target.value,
    });
  }
  handleInputFocus(e){
    this.setState({
      focus:e.target===document.activeElement,
      //activeElement 属性返回文档中当前获得焦点的元素。
    })
  }
  handleSearch(){
    /*if(this.props.onSearchCon){
      this.props.onSearchCon(this.state.value);
    }*/
    console.log(this.state.value,"搜索内容")
  }
  handleTabs(key){
    console.log(key,"key")
  }
  handleHover(e){
    this.setState({
      src:<img src={require('../common/code.jpg')} style={{width:"100%"}}/>
    })
  }
  render(){
    const {style, size, placeholder} =this.props;
    const btnCls=classNames({
      'ant-search-btn':true,
      'ant-search-btn-noempty':!!this.state.value.trim()
    });
    const searchCls=classNames({
      'ant-search-input':true,
      'ant-search-input-focus':this.state.focus
    });
    return(
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
         <div className="ant-search-wrapper">
            <div className="ant-search-input-wrapper">
                <InputGroup className={searchCls}>
                  <Input placeholder={placeholder} 
                    value={this.state.value}
                    onFocus={this._handleInputFocus}
                    onChange={this._handleInputChange}
                    onBlur={this._handleInputFocus}
                    onPressEnter={this._handleSearch}
                    />
                  <div className="ant-search-input-wrap">
                    <Button icon="search" className={btnCls} size={size} onClick={this._handleSearch}/>
                  </div>
                </InputGroup>
            </div>
         </div>
          <div className="antd-tabs-wrapper">
            <Tabs defaultActiveKey="1" onChange={this._handleTabs}>
              <TabPane tab="热门文章" key="1">
                <ol className="antd-hot-article">
                  <li>
                      <i>React <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">React Native痛点解析之性能调优</span>
                  </li>
                  <li>
                      <i>React <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">超详细 React Native 实现微信好友 / 朋友圈分享功能</span>
                  </li>
                  <li>
                      <i>Node <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">Node.js 命令行程序开发教程</span>
                  </li>
                  <li>
                      <i>React <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">旅行喵 React Native 技术实践</span>
                  </li>
                  <li>
                      <i>React·2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">React Native for Android应用名及图标修改</span>
                  </li>
                </ol>
              </TabPane>
              <TabPane tab="前端头条" key="2">
                <ol className="antd-hot-article">
                  <li>
                      <i>React <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">前端头条React Native痛点解析之性能调优</span>
                  </li>
                  <li>
                      <i>React <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">前端头条超详细 React Native 实现微信好友 / 朋友圈分享功能</span>
                  </li>
                  <li>
                      <i>Node <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">前端头条Node.js 命令行程序开发教程</span>
                  </li>
                  <li>
                      <i>React <span className="antd-hot-article-dot">•</span> 2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">前端头条旅行喵 React Native 技术实践</span>
                  </li>
                  <li>
                      <i>React·2016-07-14  <span className="antd-hot-article-dot">•</span> yzren</i>
                      <span className="antd-hot-article-text">前端头条React Native for Android应用名及图标修改</span>
                  </li>
                </ol>
              </TabPane>
            </Tabs>
          </div>
          <div className="antd-hot-labels">
            <div>
              <h3>热门标签</h3>
              <div>
                  <a href="javascript:viod(0)">React Native </a><a href="javascript:viod(0)">Node</a><a href="javascript:viod(0)">命令行</a><a href="javascript:viod(0)">旅行喵</a><a href="javascript:viod(0)">reactnative</a><a href="javascript:viod(0)">TextInputos项目集成</a><a href="javascript:viod(0)">样式</a><a href="javascript:viod(0)">react-native</a><a href="javascript:viod(0)">首屏渲染</a><a href="javascript:viod(0)">native</a><a href="javascript:viod(0)">CSS3</a><a href="javascript:viod(0)">画基本图形</a><a href="javascript:viod(0)">Iterm2</a><a href="javascript:viod(0)">Mac</a><a href="javascript:viod(0)">react-router</a><a href="javascript:viod(0)">路由系统</a><a href="javascript:viod(0)">模拟器</a><a href="javascript:viod(0)">iOS</a><a href="javascript:viod(0)">生命周期</a><a href="javascript:viod(0)">React</a><a href="javascript:viod(0)">解密</a><a href="javascript:viod(0)">setStatereact</a><a href="javascript:viod(0)">diff</a><a href="javascript:viod(0)">Web缓存</a><a href="javascript:viod(0)">ES6</a><a href="javascript:viod(0)">十大特性</a><a href="javascript:viod(0)">yum安装mysql</a><a href="javascript:viod(0)">安装node/</a><a href="javascript:viod(0)">performanceWebpack</a>
                </div>
            </div>
          </div>
      </div>
    )
  }
} 
/*
 ReactDOM.render(
  <RightWrap placeholder="请输入搜索内容" onSearchCon={value=>console.log(value)} style={{width:"100px"}} />
)*/


export default RightWrap