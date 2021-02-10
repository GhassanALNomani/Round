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
    image: String,
    userType: String,
    
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    place: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }]
    
}, {timestamps : true})



const User = mongoose.model('user', userSchema)
module.exports = User