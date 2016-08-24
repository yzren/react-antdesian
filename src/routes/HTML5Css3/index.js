module.exports = {
  path: 'HTML5Css3',
  getComponent(location,cb){
  	require.ensure([],require=>{
  		cb(null,require('../../layouts/HTML5Css3/HTML5Css3'))
  	})
  }
}
