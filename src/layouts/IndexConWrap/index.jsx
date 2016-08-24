import React, { Component, PropTypes } from 'react';
import {Icon} from 'antd';
import GlobalNav from'../../components/GlobalNav/GlobalNav';
import IndexWrap from'./IndexConWrap';
import  '../../components/GlobalNav/GlobalNav.less';
class App  extends Component{
  constructor(props) {
    super(props);
    if (window.innerWidth < 750) {
      this.state = {
        stateWindow: true,
      }

    } else {
      this.state = {
        stateWindow: false
      }
    }
    this._handeleResize = this.handleResize.bind(this);
  }

  handleResize(e) {
    if (window.innerWidth < 750) {
      this.setState({
        stateWindow: true,
      })

    } else {
      this.setState({
        stateWindow: false
      })
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this._handeleResize);
  }
  render(){

    var target = this.state.stateWindow;
    return (
      <div>
        <GlobalNav />
        <div className="antd-wrap" id={target ? "mWrap" : "pcWrap"}>
        	{this.props.children|| <IndexWrap />}
        </div>
      </div>
    )
  }
}

export default App
