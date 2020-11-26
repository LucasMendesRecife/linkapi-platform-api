const router = require('express').Router()
const opportunitiesController = require('../controller/opportunities')

router.post("/createOpportunities", opportunitiesController.createOpportunity)
router.get("/listOpportunities", opportunitiesController.listOpportunity)

module.exports = router
