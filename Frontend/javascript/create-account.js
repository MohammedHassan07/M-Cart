console.log('create-account.js')

import { isEmpty } from './utils/handleError.js'
import { sendData } from "./utils/sendData.js";

// taking input on button click continue click 
const btnContinue = document.getElementById('btn-coninue')
btnContinue.addEventListener('click', async (event) => {

    event.preventDefault()

    const name = document.getElementById('name-input').value
    const countryCode = document.getElementById('select-country-code').value
    const mobile = document.getElementById('mobile-input').value
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const error = document.getElementById('error-box')

    let userData;

    if (email) {

        userData = { name, data: email, password, type: 'email' }
    } else {

        userData = { name, data: countryCode + ' ' + mobile, password, type: 'mobile' }
    }

    // check isEmpty
    if (isEmpty(userData)) {

        error.style.display = 'flex'
    } else {

        error.style.display = 'none'

        try {

            const url = 'http://127.0.0.1:3000/user/register'
            // console.log('createAccount: ', userData)

            const response = await sendData(url, userData)
            console.log('createAccount: ', response)

            if (response.message === 'success') {

                window.location.replace('http://127.0.0.1:5500/Frontend/html/home.html')
            }
            else {

                error.style.display = 'flex'
            }


        } catch (error) {
            console.log('createAccount: ', error.message)
        }
    }
})