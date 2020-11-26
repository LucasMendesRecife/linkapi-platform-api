const { CreateOpportunityUseCase, ListOpportunityUseCase } = require('../../../../domain/usecase/opportunities')
const { CreateOpportunityUseCaseRequest, ListOpportunityUseCaseRequest } = require('../../../../domain/usecase/ucio/opportunities')
const { CreateOpportunityUseCaseRepository, ListOpportunityUseCaseRepository } = require('../../../../infrastructure/provider/repository/opportunities')
const response = require('../response/response')

async function createOpportunity(_, res) {
    const ucReq = new CreateOpportunityUseCaseRequest()

    const repository = new CreateOpportunityUseCaseRepository()
    const usecase = new CreateOpportunityUseCase(repository)

    const ucRes = await usecase.createOpportunity(ucReq)

    if (ucRes.error) {
        response.internalServerError(res, ucRes.error.message)
    } else {
        response.success(res, ucRes)
    }
}

async function listOpportunity(_, res) {
    const ucReq = new ListOpportunityUseCaseRequest()

    const repository = new ListOpportunityUseCaseRepository()
    const usecase = new ListOpportunityUseCase(repository)

    const ucRes = await usecase.listOpportunity(ucReq)

    if (ucRes.error) {
        response.internalServerError(res, ucRes.error.message)
    } else {
        response.success(res, ucRes)
    }
}

module.exports = {
    createOpportunity,
    listOpportunity
}
