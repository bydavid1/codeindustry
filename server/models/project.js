const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Project = new Schema({
    image: String,
    title: String,
    link: String,
    description: String

})

module.exports = mongoose.model('projects', Project)