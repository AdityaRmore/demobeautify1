const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({
    'p_company': {
        required: true,
        type: String
    }, 'p_companyId': {
        required: true,
        type: String
    }, 'p_name': {
        required: true,
        type: String
    }, 'p_price': {
        required: true,
        type: Number
    }, 'p_quantity': {
        required: true,
        type: Number
    }, 'p_description': {
       required: true,
        type: String
    },

});

module.exports = mongoose.model("products", dataSchema);