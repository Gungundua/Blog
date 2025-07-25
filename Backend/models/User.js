const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

const userModel = model('User', userSchema)

module.exports = userModel