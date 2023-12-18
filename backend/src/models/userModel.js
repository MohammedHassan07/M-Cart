import mongoose from "mongoose";

const model = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
    mobile: String
})

const userModel =  mongoose.model('user', model)

export default userModel