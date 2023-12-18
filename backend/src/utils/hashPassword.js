
import bcryptjs  from 'bcryptjs'
import { configDotenv } from 'dotenv'
configDotenv()

// hash password
const hashPassword = async (password) => {

    try{

        const salt = bcryptjs.genSaltSync(10)
        
        const hashPassword = await bcryptjs.hash(password, salt)
        
        return hashPassword
    }catch(error){

        console.log(error.message)
    } 
}

export default hashPassword