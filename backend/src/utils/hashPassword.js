
import hash  from 'bcryptjs'
import { configDotenv } from 'dotenv'
configDotenv()

// hash password
const hashPassword = async (password) => {

    try{

        const hashPassword = await hash(password, process.env.HASH_SECRET_SALT)
        return hashPassword
    }catch(error){

        console.log(error.message)
    } 
}

export default hashPassword