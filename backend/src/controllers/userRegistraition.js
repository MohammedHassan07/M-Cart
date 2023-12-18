import userModel from '../models/userModel.js'
import hashPassword from '../utils/hashPassword.js'
import generateToken from '../utils/generateToken.js'

// registration
const register = async (req, res) => {

    try {

        const { name, email, password, mobile, type } = req.body

        let user;
        if (type === email) {


            user = await userModel.findOne(email)
        } else {

            user = await userModel.findOne(mobile)
        }
        if (user) {

            res.status(401).json({ message: `User With this ${type} is Already Registered` })
        } else {

            const hash = hashPassword(password)

            if (type === email) {

                data = { name: name, email: email, password: hash }
            } else {

                data = { name: name, mobile: mobile, password: hash }
            }
            const userData = userModel(data)

            console.log(userData)

            const response = await userData.save()

            // generate jwt
            const token = generateToken(email || mobile)

            res.status(201).json({ message: 'Success', token: token, data: response })
            console.log(response)
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export default register