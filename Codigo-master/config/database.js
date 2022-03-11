const mongoose = require("mongoose");

const uri = "mongodb://melki2:Play40028922@cluster0-shard-00-00.t2ks8.mongodb.net:27017,cluster0-shard-00-01.t2ks8.mongodb.net:27017,cluster0-shard-00-02.t2ks8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-nyuj9s-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;