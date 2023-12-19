import express from 'express'
import home from '../controllers/nav.js'
const route = express.Router()

// home route --> send json to home page
route.get('/', home)


// cart route
// TODO: Add middleware for token verification
route.get('/seller')