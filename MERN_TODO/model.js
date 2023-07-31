const mongoose = require('mongoose');

const TaskSchema = new mongoose.schema({
    todo:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now

    }
})

module.exports = mongoose.model('TaskSchema',TaskSchema);