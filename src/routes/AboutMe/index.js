module.exports={
	path:"aboutme",
	getComponent(location,cb){
		require.ensure([],require=>{
			cb(null,require('../../layouts/aboutme/aboutme'));
		})
	}
}