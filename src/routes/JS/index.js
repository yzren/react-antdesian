module.exports = {
  path: 'js',
  getComponent(location,cb){
  	require.ensure([],require=>{
  		cb(null,require('../../layouts/js/js'))
  	})
  }
}
