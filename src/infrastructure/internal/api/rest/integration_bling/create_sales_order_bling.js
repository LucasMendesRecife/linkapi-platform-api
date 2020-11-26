const axios = require('axios')
const { generatorXml } = require('../common/generator_xml')
const { utf8Encode } = require('../common/utf8_encode')
require('dotenv/config')

async function createSalesOrderBling(data) {
    try {
        const xml = generatorXml(data)

        const resp = await axios({
            method: "POST",
            url: `https://bling.com.br/Api/v2/pedido/json?apikey=${process.env.API_KEY}&xml=${utf8Encode(xml)}`,
            responseType: 'json'
        })

        return resp.data.retorno.pedidos
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = {
    createSalesOrderBling
}
