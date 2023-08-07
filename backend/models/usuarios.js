import {Schema,model} from "mongoose";
const userSchema = Schema({
    email:{type:String,required:[true],trim:true,unique:true},
    imgUser:{type:String,trim:true,unique:true},
    password:{type:String,required:[true]},
    username:{type:String,required:true},
    rango:{type:String,trim:true,default:'USER'},
    estado:{type:Boolean,default:true},
    googleSignIn:{type:Boolean,default:true}
},{timestamps:true})

const User = model("usuarios",userSchema);
export default User;