const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Account = new Schema({
    fullName: {type: String, required: true},
    address: {type: String, required: true},
    grade: {type: String, required: true}, //1 most important, 2 medium important //3low important
    email: {type: String, required: true},
    birthDate: {type: String, required: true},
    about: {type: String, required: true},
    facebook: String,
    twitter: String,
    linkedin: String,
    github: String,
    stackoverflow: String,
    codepen: String
},
{
    collection: "account"
})

module.exports = mongoose.model('account', Account)