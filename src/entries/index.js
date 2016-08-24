import './index.html';
import './index.less';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory,IndexRoute  } from 'react-router';
import App from '../layouts/IndexConWrap';
const rootRoute2 = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: App,
    childRoutes: [
		require('../routes/HTML5Css3'),
    require('../routes/Js'),
		require('../routes/ES6React'),
		require('../routes/Angular'),
    require('../routes/tool'),
		require('../routes/DetailWrap'),
		require('../routes/AboutMe')
    ]
  } ]
}

ReactDOM.render(<Router history={browserHistory}  routes={rootRoute2} />, document.getElementById('root'));
