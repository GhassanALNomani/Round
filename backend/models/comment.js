const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    text: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment