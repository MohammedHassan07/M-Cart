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

    const data = { name, countryCode, mobile, email, password }

    console.log('createAccount: ', data)

    // check isEmpty
    if (isEmpty(data)) {

        console.log('field is empty')
    } else {
        
        try {

            const url = ''
            const response = await sendData(data)
            console.log('createAccount: ', response)

        } catch (error) {
            console.log(error.message)
        }
    }
})