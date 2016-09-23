import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './listLeftWrap.less';
import MainData from '../../data/data';
import ListData from '../../data/listData';


class ListLeftWrap extends Component{
  constructor(props){
    super(props);
    this.state={
      data:indexData,
      urlParam:""
    }
  }

  componentWillMount() {
    let urlParam = (window.location.href).split("/")[3];
    let upData = [];
    if (urlParam == "") {
      this.setState({
        data: indexData
      })
    } else {
      listData.map((v,k) => {
        if (urlParam == v.name) {
          upData.push(v)
        }
      })
      this.setState({
        data: upData,
        urlParam:urlParam
      })
    }
  }

  render(){
    let data = this.state.data;
    let urlParam = this.state.urlParam;
    console.log(data) 

    return (
      <div className={styles.antdListWrap}>
        <ul>
        {
          data.map((v,k)=>(
                <li key={k}>
                  <Link to={`/detail?id=${v.id}&urlParam=${urlParam}`}>
                    <h2>{v.title}</h2>
                    <span><img src={v.src} alt="" /></span>
                    <p>{v.preface}</p>
                  </Link>
                </li>
            )
          )
        }
        </ul>
      </div>
    );
  }
}


export default ListLeftWrap;
