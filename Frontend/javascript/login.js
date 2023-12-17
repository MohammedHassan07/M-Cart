console.log('login.js')

import { sendData } from "./utils/sendData.js"

// continue button, email input
const btnContinue = document.getElementById('btn-coninue')
const emailInput = document.getElementById('email-input')
const error = document.getElementById('error-box')
btnContinue.addEventListener('click', async (event) => {

    event.preventDefault()

    const email = emailInput.value
    if (email === '') {

        error.style.display = 'flex'
    } else {

        error.style.display = 'none'
        console.log(email)

        try {

            const url = ''
            const response = await sendData({ email: email })
            console.log('logIn: ', response)

        } catch (error) {
            console.log(error.message)
        }
    }
})