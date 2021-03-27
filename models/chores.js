const mongoose = require('mongoose');

const ChoreSchema = mongoose.Schema({
   
    choreName: {
        type: String,
        required: true,
    },
    value:{
        type: Number,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true, 
    },
    date:{
        type: Date,
        default: Date.now,
    },
    child: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'child'
    },

})

module.exports = mongoose.model('chore',ChoreSchema);