const mongoose = require('mongoose');

const ChildSchema = mongoose.Schema({
    name: {
    type: String,
    required: true
},
    age: {
        type: Number,
        required: true,

    },
    sex: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('child', ChildSchema);