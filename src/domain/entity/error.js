const INTERNAL_SERVER_ERROR_CODE = 1
const PRE_CONDICIONAL_ERROR_CODE = 2

class InternalServerError {
    constructor(message) {
        this.code = INTERNAL_SERVER_ERROR_CODE
        this.message = message
    }
}

class PreCondicionalError {
    constructor(message) {
        this.code = PRE_CONDICIONAL_ERROR_CODE
        this.message = message
    }
}

module.exports = {
    InternalServerError,
    PreCondicionalError
}
