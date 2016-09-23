import React ,{Component} from 'react';
import {Menu,Icon} from 'antd';
import {Link,IndexLink} from 'react-router';
import styles from './GlobalNav.less';
import BannerWrap from'../BannerWrap/BannerWrap';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
let mode="";
class GlobalNav extends Component {
  constructor(props) {
    super(props);
    if (window.innerWidth < 750) {
      this.state = {
        current: "main",
        mode: "inline",
        className: "antNavSWrap",
        antdNavBtn: "antdNavIconShow",
        collapse: false
      }
    } else {
      this.state = {
        current: "main",
        mode: "horizontal",
        className: "antNavHWrap",
        antdNavBtn: "antdNavIconHide"
      }
    }
    this._handleResize = this.handleResize.bind(this);//切换屏幕
    this._onCollapseChange=this.onCollapseChange.bind(this);//改变collapse状态，为true导航显示，为false导航不显示
    this._onClickHide=this.onClickHide.bind(this)//强制隐藏侧边导航
    this._handleClick=this.handleClick.bind(this)//点击当前的nav
  }
   handleClick(e) {
   // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  handleResize(e) {
    if (window.innerWidth < 750) {
      this.setState({
        mode: "inline",
        className: "antNavSWrap",
        antdNavBtn: "antdNavIconShow",
      })
    } else {
      this.setState({
        mode: "horizontal",
        className: "antNavHWrap",
        antdNavBtn: "antdNavIconHide"
      })
    }
    this.setState({
      collapse: false
    })
  }
  componentDidMount(){
     window.addEventListener('resize', this._handleResize);
  }
  onCollapseChange(e){
    this.setState({
      collapse:!this.state.collapse
    })
    //console.log(this.state.collapse)
  }
  onClickHide(e){
    this.setState({
      collapse:false
    })
  }
  render(){
    const  collapse =this.state.collapse;
    return(
     <div>
         <div className="antdNavWrap">
            <Icon type="bars" 
                className={this.state.antdNavBtn} 
                onClick={this._onCollapseChange}/>
            <span className="antdNavLogo" onClick={this._onClickHide}>
              <img src="http://i2.letvimg.com/lc02_pay/201607/11/16/00/logo.png"/>
            </span>
            <div onClick={this._onClickHide}>
              <Menu onClick={this._handleClick}
                    selectedKeys={[this.state.current]}
                    mode={this.state.mode}
                    className={this.state.className} id={collapse ? "showState" : "hideState"}>
                <Menu.Item key="main">
                <IndexLink to="/">首页</IndexLink>
                </Menu.Item>
                <Menu.Item>
                <Link to="/html5css3">HTML5/CSS3</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/js">Javascript/Jquery</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/es6react">ES6/React</Link>
                </Menu.Item>
                <Menu.Item>
                 <Link to="/angular"> Angular</Link>
                </Menu.Item>
                <Menu.Item key="setting">
                 <Link to="/tool"> <Icon type="setting"/>前端小工具</Link>
                </Menu.Item>
                <Menu.Item key="user">
                 <Link to="/aboutme"> <Icon type="user"/>关于我</Link>
                </Menu.Item>
                <Menu.Item key="edit">
                 <Link to="/publicarticle"><Icon type="edit" />发布文章</Link>
                </Menu.Item>
              </Menu>
            </div>
          </div>
     </div>
      )
  }
}

export default GlobalNav