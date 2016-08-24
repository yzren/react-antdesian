import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './DetailCom.less';
import mainData from '../../data/data';
import ListData from '../../data/listData';


let value="";
class DetailCom extends Component{
  constructor(props){
    super(props);
    this.state={
      value:""
    }
  }
  componentWillMount(){
    let id = location.search.split("?")[1].split("&")[0].split("=")[1];
    let urlParam = location.search.split("&")[1].split("=")[1];

    if (urlParam == "") {
      value = indexData[id];
    } else {
      value = listData[id];
    }
    this.setState({
      value:value
    })
  }
  render(){
    console.log(this.state.value)
    return (
      <div className={styles.antdListWrap}>
        <ul>
          <li>
            <h2>{value.title}</h2>
            <span><img src={value.src} alt="" /></span>
            <p>{value.content}</p>
          </li>
        </ul>
      </div>
    );
  }
}


export default DetailCom;
