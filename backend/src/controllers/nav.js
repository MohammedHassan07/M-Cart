import homePage from '../models/home-page-model.js'
import imageHandler from '../utils/getImagesHandler.js'

const home = async (req, res) => {

    try {

        const response = await homePage.find()

        // const bankPosterLoc = './src/public/images/bankPoster'
        const cardsLoc = './src/public/images/cards'
        const cardSliderLoc = './src/public/images/cardSlider'
        const sliderLoc = './src/public/images/slider'
        const topCircularLoc = './src/public/images/topCircularSlider/'

        // const bankPoster = await getImageHandler(response, bankPosterLoc)
        const cards = await imageHandler(response, cardsLoc)
        const cardSlider = await imageHandler(response, cardSliderLoc)
        const slider = await imageHandler(response, sliderLoc)
        const topCircularSlider = await imageHandler(response, topCircularLoc)

        res.status(200).json({ cards, cardSlider, slider, topCircularSlider, message: 'success' })

    } catch (error) {
        console.log('home controller: ', error.message)

        // to display error page
        // res.render()
    }
}

// upload data in mongodb for homePage
const uploadImg = async (req, res) => {

    try {

        const { type, data } = req.body
        const newData = new homePage({ type, data })

        const response = await newData.save()
        res.status(200).json({ response })
    } catch (error) {
        console.log('upload image: ', error.message)
    }
}
const nav = { home, uploadImg }

export default nav