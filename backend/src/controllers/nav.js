import homePage from '../models/home-page-model'
import getImageHandler from '../utils/getImagesHandler'

const home = async (req, res) => {

    try {

        const response = await homePage.find()
        let { topCircularSlider, slider, bankPoster, cards, cardSlider } = response

        const bankPosterLoc = '../public/images/bankPoster'
        const cardsLoc = '../public/images/cards'
        const cardSliderLoc = '../public/images/cardSlider'
        const sliderLoc = '../public/images/slider'
        const topCircularLoc = '../public/images/topCirularSlider'

        topCircularSlider = await getImageHandler(topCircularSlider, topCircularLoc)
        slider = await getImageHandler(topCircularSlider, sliderLoc)
        bankPoster = await getImageHandler(topCircularSlider, bankPosterLoc)
        cards = await getImageHandler(topCircularSlider, cardsLoc)
        cardSlider = await getImageHandler(topCircularSlider, cardSliderLoc)

        res.status(200).json({ topCircularSlider, slider, bankPoster, cards, cardSlider })
        console.log(topCircularSlider, slider, bankPoster, cards, cardSlider)

    } catch (error) {
        console.log('home controller: ', error.message)
        res.render()
    }
}

export default home