class CreateOpportunityUseCaseRepositoryInterface {
    async getOpportunitiesOnPipeDrive() {
        return null
    }

    async createSalesOrderBling(data) {
        return null
    }

    async createOpportunity({ title, day, value }) {
        return null
    }
}

class ListOpportunityUseCaseRepositoryInterface {
    async listOpportunitys() {
        return null
    }
}

module.exports = {
    CreateOpportunityUseCaseRepositoryInterface,
    ListOpportunityUseCaseRepositoryInterface
}
