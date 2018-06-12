var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema= new Schema( {
    id:mongoose.Schema.Types.ObjectId,
    name:String  

});

module.exports=mongoose.model('users',userSchema)