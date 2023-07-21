const mongoose = require("mongoose");

const date = new Date(); // Replace with the actual date
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
var dateString = `${year}-${month}`;

let dataSchema = new mongoose.Schema({
    'adminid': {
        required: true,
        type: String
    }, 'month': {
        type: String,
        default: dateString
         }, 'day': {
                type: String,
                required: true
    }, 'product_sale': {
        required: true,
        type: Number
    }, 'service_sale': {
        required: true,
        type: Number
    }
}, { strict: false });

module.exports = mongoose.model("monthly_Sale", dataSchema);