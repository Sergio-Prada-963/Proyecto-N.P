import {Schema,model} from "mongoose";
const userSchema = Schema({
    email:{type:String,required:[true],trim:true,unique:true},
    imgUser:{type:Image,required:[true],trim:true,unique:true},
    password:{type:String,required:[true]},
    username:{type:String,required:true},
    rango:{type:String,default:'usuario',enum:["usuario","admin"]}
},{timestamps:true})

const User = model("usuarios",userSchema);
export default User;