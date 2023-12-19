import * as jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

const verifyToken = async (req, res, next) => {

    try {

        const token = req.body.token

        const data = await jwt.verify(token, process.env.SECRET_JWT_KEY)
        if (data) {

            req.data = data
            next()
        } else {

            res.status(401).json({ message: 'something went wrong try to sign in again' })
        }
    } catch (error) {
        console.log('verify token: ', error.message)
    }
}

export default verifyToken