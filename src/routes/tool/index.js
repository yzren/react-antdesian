module.exports={
	path:"tool",
	getComponent(location,cb){
		require.ensure([],require=>{
			{cb(null,require('../../layouts/tool/tool'))}
		})
	}
}