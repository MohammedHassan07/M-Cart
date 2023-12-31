import  userModel  from '../models/userModel.js'
import  comparePassword  from '../utils/comparePassword.js'
import  generateToken  from '../utils/generateToken.js'

// check email
// check user with this email is present  
const login = async (req, res) => {

    try {

        // data is email or mobile
        const { data, password, type } = req.body

        let user;
        if (type === 'email') {

            user = await userModel.findOne({ email: data })
        } else {

            user = await userModel.findOne({ mobile: data })
        }

        if (user) {

            // check password
            const valid = comparePassword(password)
            if (valid) {

                // generate token
                const token = await generateToken(data)
                
                res.json({ token: token, message: 'success' })

            } else {

                req.status().json({ message: 'Your password is incorrect' })
            }
        } else {

            res.json({ message: `We cannot find an account with that ${type} ` })
        }


    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    }

}

export default login