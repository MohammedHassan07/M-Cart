import express from 'express'

const route = express.Router()

// home route --> send json to home page
route.get('/')


// cart route
// TODO: Add middleware for token verification
route.get('/seller')