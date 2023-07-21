const mongoose = require("mongoose");
const date = new Date(); // Replace with the actual date
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const date2 = String(date.getDate());
var dateString = `${year}-${month}`;

let dataSchema = new mongoose.Schema({
    'user_name':{
        required:true,
        type: String
    },
    'user_address':{
        required:true,
        type: String
    },
    'user_mobile':{
        required:true,
        type: Number
    },
    'user_email':{
        required:true,
        type: String
    },
    'adminid':{
        required:true,
        type: String
    },
    'user_date':{
    type: String,
    required: true
    },
    'product_purchasing':{
         default: 0,
        type: Number
    },
    'services_purchasing':{
        default: 0,
        type: Number
    },
    'total_spent':{
            default: 0,
            type: Number
        },
    'total_visits':{
//        required:true,
 default: 0,
        type: Number
    }
});

module.exports = mongoose.model("user_Data", dataSchema);