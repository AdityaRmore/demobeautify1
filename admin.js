const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({

   'admin_name': {
      required: true,
      type: String,
   }, 'admin_id': {
      required: true,
      type: String,
   }, 'admin_phone': {
      required: true,
      type: Number,
   }, 'admin_address': {
      required: true,
      type: String,
   }, 'admin_email': {
      default: ".",
      type: String,
   }, 'companyId': {
      default: [],
      type: mongoose.Schema.Types.Mixed
   },
}, { strict: false });

module.exports = mongoose.model("admin", dataSchema); 