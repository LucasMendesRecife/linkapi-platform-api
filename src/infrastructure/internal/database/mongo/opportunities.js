const database = require('./connection/connection')
const { opportunityModel } = require('./models/opportunities')

async function createOpportunity({ title, day, value }) {
    database.toConnectMongo()
    const fields = { title, day, value }

    const resp = await new opportunityModel(fields).save()

    database.disconnectMongo()

    return resp
}

async function listOpportunitys() {
    database.toConnectMongo()

    const list = await opportunityModel.find()

    database.disconnectMongo()
        
    return list
}

module.exports = {
    createOpportunity,
    listOpportunitys
}
