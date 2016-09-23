module.exports={
	path:"publicarticle",
	getComponent(loaction,cb){
		require.ensure([],require=>{
			cb(null,require("../../layouts/PublishedArticles/PublishedArticles"));
		})
	}
}