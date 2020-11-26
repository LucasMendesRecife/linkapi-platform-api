const { CreateOpportunityUseCaseRequest, CreateOpportunityUseCaseResponse, ListOpportunityUseCaseRequest, ListOpportunityUseCaseResponse } = require('./ucio/opportunities')
const { CreateOpportunityUseCaseRepositoryInterface, ListOpportunityUseCaseRepositoryInterface } = require('./repository/opportunities')
const { InternalServerError } = require('../entity/error')

class CreateOpportunityUseCase {
    constructor(repository = new CreateOpportunityUseCaseRepositoryInterface()) {
        this.repository = repository
    }

    async createOpportunity(req = new CreateOpportunityUseCaseRequest()) {
        try {
            const opportunities = []
            const opportunitiesOnPipeDrive = await this.repository.getOpportunitiesOnPipeDrive()
            
            if(opportunitiesOnPipeDrive.data.data) {
                const data = opportunitiesOnPipeDrive.data.data

                for(let i = 0; i < data.length; i++) {
                    const title = data[i].title
                    const day = data[i].add_time
                    const value = data[i].value
                    
                    await this.repository.createSalesOrderBling(data[i])
    
                    const resp = await this.repository.createOpportunity({ title, day, value })
                    opportunities.push(resp)
                }
                
                return new CreateOpportunityUseCaseResponse(opportunities, null)
            } else {
                return new CreateOpportunityUseCaseResponse(false, null)
            }


        } catch (error) {
            console.log(error)
            return new CreateOpportunityUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class ListOpportunityUseCase {
    constructor(repository = new ListOpportunityUseCaseRepositoryInterface()) {
        this.repository = repository
    }

    async listOpportunity(req = new ListOpportunityUseCaseRequest()) {
        try {
            const resp = await this.repository.listOpportunitys()

            return new ListOpportunityUseCaseResponse(resp, null)
        } catch (error) {
            console.log(error)
            return new ListOpportunityUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

module.exports = {
    CreateOpportunityUseCase,
    ListOpportunityUseCase
}
