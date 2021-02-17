const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    text: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment