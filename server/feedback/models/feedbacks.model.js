const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    status:{
        type:String,
        default:"Active"
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);