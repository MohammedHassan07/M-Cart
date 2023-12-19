console.log('login.js')

import { sendData } from "./utils/sendData.js"

// continue button, email input
const btnContinue = document.getElementById('btn-coninue')
const dataInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password')
const error = document.getElementById('error-box')
btnContinue.addEventListener('click', async (event) => {

    event.preventDefault()

    const data = dataInput.value
    const password = passwordInput.value

    if (data === '' || password == '') {

        error.style.display = 'flex'
    } else {

        error.style.display = 'none'

        try {

            const url = 'http://localhost:3000/user/login'

            const response = await sendData(url, { data: data, password: password, type: `${data}` })

            const { token } = response
            window.localStorage.setItem('token', token)

            window.location.replace('http://127.0.0.1:5500/Frontend/html/home.html')

            // console.log('logIn: ', response)

        } catch (error) {
            console.log('logIn: ', error.message)
        }
    }
})