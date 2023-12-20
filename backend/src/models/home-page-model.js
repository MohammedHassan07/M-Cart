import mongoose from "mongoose";

const Schema = mongoose.Schema

const homePageModel = new Schema({

    type: String,
    data: Schema.Types.Mixed
})

const model = mongoose.model('homeElement', homePageModel)

export default model
