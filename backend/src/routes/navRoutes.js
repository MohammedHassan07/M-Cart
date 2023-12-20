import express from 'express'
import nav from '../controllers/nav.js'
const route = express.Router()

// home route --> send json to home page
route.get('/', nav.home)

// temp rout --> upload image to mongodb for home page
route.post('/upload-img', nav.uploadImg)


// cart route
// TODO: Add middleware for token verification
route.get('/seller')

export default route