const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Skill = new Schema({
    title: String,
    status: String,
    level: Number
})

module.exports = mongoose.model('skills', Skill)