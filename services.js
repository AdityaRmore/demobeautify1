const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({
    'name': {
        required: true,
        type: String
    }, 'price': {
        required: true,
        type: Number
          }, 'time': {
                required: true,
                type: Number
    }
}, { strict: false });

module.exports = mongoose.model("services", dataSchema);