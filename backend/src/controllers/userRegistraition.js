import userModel from '../models/userModel.js'
import hashPassword from '../utils/hashPassword.js'
import generateToken from '../utils/generateToken.js'

// registration
const register = async (req, res) => {

    try {

        const { name, data, password, type } = req.body
      
        let user;
        if (type === 'email') {

            user = await userModel.findOne({ email: data })
        } else {

            user = await userModel.findOne({ mobile: data })
        }
        if (user) {

            res.status(401).json({ message: `User With this ${type} is Already Registered` })
        } else {

            const pass = await hashPassword(password)

            let newData;
            if (type === 'email') {

                newData = { name: name, email: data, password: pass }
            } else {

                newData = { name: name, mobile: data, password: pass }
            }
            const userData = userModel(newData)

            const response = await userData.save()

            // generate jwt
            const token = await generateToken(data)

            res.status(201).json({ message: 'success', token: token, data: response })
            // console.log(response)
        }

    } catch (error) {
        console.log('registerUser: ', error.message)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export default register