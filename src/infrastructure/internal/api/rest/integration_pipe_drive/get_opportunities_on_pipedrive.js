const axios = require('axios')
require('dotenv/config')

async function getOpportunitiesOnPipeDrive() {
    return await axios({
        method: "GET",
        url: `https://api.pipedrive.com/v1/deals?status=won&api_token=${process.env.API_TOKEN}`,
        responseType: 'json'
    })
}

module.exports = {
    getOpportunitiesOnPipeDrive
}
