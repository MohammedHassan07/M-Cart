import { config as configDotenv } from 'dotenv';
import express from 'express';
import hbs from 'hbs'
import cors from 'cors'
import connect from './src/config/connectToDatabase.js'
import * as userRoute from './src/routes/userRoutes.js'
import * as navRoute from './src/routes/navRoutes.js'

configDotenv();

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {

    console.log('Server is Up at', PORT);
})

// connect to database
connect()

app.use(express.json())
app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.use(express.static('./backend/public'))

// set the CORS 
const corsOption = {

    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))

// routes
app.use('/user', userRoute.default)
app.use(navRoute.default)
