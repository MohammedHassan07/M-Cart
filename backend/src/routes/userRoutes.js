import express from "express";
import register from '../controllers/userRegistraition.js'
import login from '../controllers/login.js'

const route = express.Router()

route.post('/register', register)

route.post('/login', login)

export default route