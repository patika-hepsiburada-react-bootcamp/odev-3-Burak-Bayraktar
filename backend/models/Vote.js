const mongoose = require('mongoose')

const VoteSchema = mongoose.Schema({
    vote: String,
})

module.exports = mongoose.model('Votes', VoteSchema)