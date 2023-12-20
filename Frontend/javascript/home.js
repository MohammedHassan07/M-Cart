console.log('Home.js')

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

loadJson()

const backToTop = document.getElementById('back-to-top')
backToTop.addEventListener('click', (event) => {

    event.preventDefault()

    console.log('back to Top')
})