import { mongoose } from 'mongoose'
import { configDotenv } from 'dotenv'

configDotenv()

const dbURL = process.env.DB_URL

export default async function connect() {

    try {

        await mongoose.connect(dbURL)
        console.log('connected')
    } catch (error) {
        console.log(error.message)
    }
}
