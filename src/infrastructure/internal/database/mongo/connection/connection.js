const mongoose = require('mongoose');

const URI = "mongodb+srv://linkapi-db-mongo:linkapimongodatabase@cluster0.ngvxo.mongodb.net/linkapi-mongodb?retryWrites=true&w=majority"

async function toConnectMongo() {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    console.log("Conected mongodb")
}

async function disconnectMongo() {
    mongoose.disconnect()
    console.log("Disconnected mongodb")
}


module.exports = {
    toConnectMongo,
    disconnectMongo
}
