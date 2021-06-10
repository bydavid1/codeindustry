const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Certification = new Schema({
    title: String,
    important: Number, //1 most important, 2 medium important //3low important
    school: String,
    dateRange: String
})

module.exports = mongoose.model('certifications', Certification)