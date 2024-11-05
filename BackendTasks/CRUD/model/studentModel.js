import mongoose from "mongoose";
 const studentSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        RollNo:{
            type:Number,
            required:true,
            unique: true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        address:{
            type:String,
            required:true
        },
        
}) ;
export default mongoose.model("students",studentSchema);