const mongoose = require('mongoose')

const userSchecma = mongoose.Schema({
    name: String,
    password: {
        type: String
    }
}, {timestamps: true})


module.exports = mongoose.model('user',userSchecma)