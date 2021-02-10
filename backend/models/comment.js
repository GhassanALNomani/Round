const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    text: String,
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment