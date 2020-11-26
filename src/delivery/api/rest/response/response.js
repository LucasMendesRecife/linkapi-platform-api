function success(res, body) { 
    return res.status(200).json(body)
}

function internalServerError (res, error) {
    return res.status(500).send(error)
}

module.exports = {
    success,
    internalServerError
}
