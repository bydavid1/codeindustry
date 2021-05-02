const { url } = require('./config')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
const db = {}

db.mongoose = mongoose
db.url = url

module.exports = db