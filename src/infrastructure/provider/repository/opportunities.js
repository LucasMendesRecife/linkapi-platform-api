const { createOpportunity, listOpportunitys } = require('../../internal/database/mongo/opportunities')
const { getOpportunitiesOnPipeDrive } = require('../../internal/api/rest/integration_pipe_drive/get_opportunities_on_pipedrive')
const { createSalesOrderBling } = require('../../internal/api/rest/integration_bling/create_sales_order_bling')

class CreateOpportunityUseCaseRepository {
    async getOpportunitiesOnPipeDrive() {
        return await getOpportunitiesOnPipeDrive()
    }

    async createSalesOrderBling(data) {
        return await createSalesOrderBling(data)
    }

    async createOpportunity({ title, day, value }) {
        return await createOpportunity({ title, day, value })
    }
}

class ListOpportunityUseCaseRepository {
    async listOpportunitys() {
        return await listOpportunitys()
    }
}

module.exports = {
    CreateOpportunityUseCaseRepository,
    ListOpportunityUseCaseRepository
}
