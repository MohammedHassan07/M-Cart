import mongoose from "mongoose";

const Schema = mongoose.Schema

let topCircularSlider = {

    // img
    link: String
}

let slider = {
    // img
    link: String
}

let bankPoster = {

    // img
    link: String
}

let cards = {

    // img
    seeMoreLink: String
}

let cardSlider = {

    // img
    link: String
}

const commonSchema = (fields) => {

    return new Schema({

        name: String,
        ...fields
    })
}

topCircularSlider = commonSchema(topCircularSlider)
slider = commonSchema(slider)
bankPoster = commonSchema(bankPoster)
cards = commonSchema(cards)
cardSlider = commonSchema(cardSlider)

const homePageModel = new Schema({

    topCircularSlider: [topCircularSlider],
    slider: [slider],
    bankPoster: [bankPoster],
    cards: [cards],
    cardSlider: [cardSlider]
})

const model = mongoose.model('homeElement', homePageModel)

export default model