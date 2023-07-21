const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
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

const servicesSchema = new mongoose.Schema({
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
});


let dataSchema = new mongoose.Schema({
   'adminid': {
      type: String,
   }, 'userid': {
      type: String,
   }, 'date': {
      type: Date,
      default: Date.now
   }, 'total_price': {
      type: Number,
   }, 'total_discount': {
      type: Number,
   }, 'noOfItems': {
      type: Number,
   }, 'noOfService': {
      type: Number,
   }, 'noOfItems_price': {
      type: Number,
   }, 'noOfService_price': {
      type: Number,
   }, 'products': {
      type: [productSchema],
   }, 'services': {
      type: [servicesSchema],
   }
}, { strict: false });

module.exports = mongoose.model("user_History", dataSchema);