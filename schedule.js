const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({
    'adminid': {
        required: true,
        type: String
    }, 'userid': {
        required: true,
        type: String
         }, 'name': {
                required: true,
                type: String
    }, 'date': {
        type: String,
        required: true
    }, 'time': {
        required: true,
        type: String
    }, 'comments': {
        type: String
         }, 'complete': {
                type: String,
                required: true
    }
}, { strict: false });

module.exports = mongoose.model("daily_schedule", dataSchema);