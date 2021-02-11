const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    text: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // check with haneen why do we need it
    // do we need to add a place ?
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment