import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    email:{type:String, required:true},
    edad:{type:Number, required:true}
})

export const usersModels = mongoose.model("users", userSchema)