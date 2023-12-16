const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})