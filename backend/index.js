import { config as configDotenv } from 'dotenv';
import express from 'express';
import connect from './src/config/connectToDatabase.js'
import * as userRoute from './src/routes/userRoutes.js'

configDotenv();

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {

    console.log('Server is Up at', PORT);
})

// connect to database
connect()

app.use(express.json())

// routes
app.use('/user', userRoute.default)
