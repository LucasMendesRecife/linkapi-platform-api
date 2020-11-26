const corsRouter = require('./cors')
const opportunitiesRouter = require('./opportunities')

module.exports = (app) => {
    app.use(corsRouter)
    app.use(opportunitiesRouter)
}
