const cors = require('cors')
const express = require('express')
const router = express.Router()

router.options('*', cors())

router.use('*', (_, res, next) => {
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

module.exports = router
