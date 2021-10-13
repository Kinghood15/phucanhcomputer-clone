const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClientSchema = new Schema({

    nameClient:{
        type:String, 
        required:true
    },
    addressClient:{
        type:String, 
        required:true
    },
    phonenumberClient:{
        type:String, 
        required:true
    },
    createdAtClient:{
        type:Date, 
        default: Date.now()
    }


})

module.exports = mongoose.model('clients',ClientSchema);