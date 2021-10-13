const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierInvoice = new Schema({
    nameSupplierInvoice:{
        type:String,
        required:true
    },
    ImageUrlSupplierInvoice:{
        type:String,
        required:true
    },
    createAtSupplierInvoice:{
        type: Date,
        default:Date.now()
    },
    codeproduct:{
        type: String,
        required: true
    },
    quanlityDetails:{
        type: Number,
        required: true
    },
    importprice:{
        type: Number,
        required: true
    },
    supplier:{
        type:Schema.Types.ObjectId,
        ref:'suppliers'
    },
    userAdmin:{
        type:Schema.Types.ObjectId,
        ref: 'userAdmins'
    }
})

module.exports = mongoose.model('supplierinvoices', SupplierInvoice);