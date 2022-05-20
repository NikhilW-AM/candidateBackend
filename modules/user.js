const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
    },
    gender: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    address: {
        type: String,
        require: true,
        trim: true,
    },
    country: {
        type: String,
        require: true,
        trim: true,
    },
    state: {
        type: String,
        require: true,
        trim: true,
    },
    pin: {
        type: String,
        require: true,
        trim: true,
    },
    skills: [{
            type: String,
            require: true,
            trim: true,
        }] ,
    exprience: {
        type: [{
            companyName: String,
            Duration: Number,
            responsibilities: String
        }]
    }
})

module.exports = mongoose.model('users',userSchema)