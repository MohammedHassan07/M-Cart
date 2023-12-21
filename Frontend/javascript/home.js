console.log('Home.js')

// hero slider
const slider = document.querySelectorAll('.slider-img')
slider.forEach((element, index) => {

    element.style.left = `${index * 100}%`
})

// next and prev button for slider
let counter = 0
const btnPrev = document.getElementById('btn-prev')
btnPrev.addEventListener('click', () => {

    if (counter === 0) {
        counter = 3
    }else {

        counter = (counter - 1) % 4
    }

    slider.forEach((element) => {

        element.style.transform = `translateX(-${counter * 100}%)`
     })
})

const btnNext = document.getElementById('btn-next')
btnNext.addEventListener('click', () => {

    counter = (counter + 1) % 4

    slider.forEach((element) => {

        element.style.transform = `translateX(-${counter * 100}%)`       
    })
})

// TODO: when document is ready hit the url to serve to fetch the data for the homePage
async function loadJson() {

    try {

        const url = 'http://localhost:3000/'
        const response = await fetch(url, {
            method: 'GET',
            headers: {

                'ContentType': 'Application/Json'
            }
        })

        const data = await response.json()
        console.log('homePage loaded', data)
    } catch (error) {
        console.log('loadJson: ', error.message)
    }
}

// loadJson()

const backToTop = document.getElementById('back-to-top')
backToTop.addEventListener('click', (event) => {

    event.preventDefault()

    console.log('back to Top')
})