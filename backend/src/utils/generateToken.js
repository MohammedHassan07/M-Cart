import  sign  from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

// generate token
const generateToken = async (data) => {

    // data is email or mobile
    try {

        const token = await sign(data, process.env.SECRET_JWT_KEY)
        return token
    } catch (error) {

        console.log(error.message)
    }

}

export default  generateToken