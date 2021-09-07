const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()

server.use('/api/cars', carsRouter)

server.use((err, req, res, next) => {//eslint-disable-line
    res.status(err.status).json({ message: err.message })
})

module.exports = server
