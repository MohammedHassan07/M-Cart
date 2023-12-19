import mongoose from 'mongoose'
import homePage from '../models/home-page-model'

const home = async (req, res) => {

    try{
        
        const response = await homePage.find()
        const {topCircularSlider, slider, bankPoster, cards, cardSlider} = response

        const circularImg = topCircularSlider.name
        
    }catch(error) {
        console.log(error.message)
        res.render()
    }
}