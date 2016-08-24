module.exports={
	path:'Angular',
	getComponent(location,cb){
		require.ensure([],require=>{
			cb(null,require('../../layouts/Angular/Angular'))
		})
	}
}