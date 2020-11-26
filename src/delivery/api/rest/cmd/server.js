const http = require('http')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const { PORT } = require('../config/config')
const router = require('../router')

function server() {
    const app = express()

    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    
    router(app)

    const server = http.createServer(app)
    server.listen(PORT)
}

module.exports = {
    server
}
