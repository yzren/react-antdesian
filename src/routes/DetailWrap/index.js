module.exports={
  path:"detail",
  getComponent(location,cb){
    require.ensure([],(require)=>{
      cb(null,require("../../layouts/DetailWrap/detail"))
    })
  }
}