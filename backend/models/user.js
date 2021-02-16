const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    userType: String, // check later if neede

    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    placesToVisit: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }]

}, { timestamps: true })



const User = mongoose.model('user', userSchema)
module.exports = User