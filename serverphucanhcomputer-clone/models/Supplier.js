const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Supplier = new Schema({
    nameSupplier:{
        type:String,
        required:true
    },
    ImageLogoSupplier:{
        type:String,
        required:true
    },
    addressSupplier:{
        type:String,
        required:true
    },
    emailSupplier:{
        type:String,
        required:true
    },
    phonenumberSupplier:{
        type:String,
        required:true
    },
    userAdmin:{
        type:Schema.Types.ObjectId,
        ref: 'userAdmins'
    }
})

module.exports = mongoose.model('suppliers', Supplier);