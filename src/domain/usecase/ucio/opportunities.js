class CreateOpportunityUseCaseRequest {
    constructor() { }
}

class CreateOpportunityUseCaseResponse {
    constructor(opportunity, error) {
        this.opportunity = opportunity
        this.error = error
    }
}

class ListOpportunityUseCaseRequest {
    constructor() { }
}

class ListOpportunityUseCaseResponse {
    constructor(opportunitys, error) {
        this.opportunitys = opportunitys
        this.error = error
    }
}

module.exports = {
    CreateOpportunityUseCaseRequest,
    CreateOpportunityUseCaseResponse,
    ListOpportunityUseCaseRequest,
    ListOpportunityUseCaseResponse
}
