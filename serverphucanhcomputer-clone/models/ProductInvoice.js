const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductInvoice = new Schema({
    ImageurlProductInvoice:{
        type:String
    },
    createAtProductInvoice:{
        type:Date,
        default:Date.now()
    },
    quanlityProductInvoice:{
        type: Number,
        required:true
    },
    totalpriceProductInvoice:{
        type:Number,
        required:true
    },
    remarkProductInvoice:{
        type: String
    },
    product:{
        type: [Schema.Types.ObjectId],
        ref: 'products'
    },
    client:{
        type:Schema.Types.ObjectId,
        ref:'clients'
    },
    userAdmin:{
        type:Schema.Types.ObjectId,
        ref: 'userAdmins'
    }
})

module.exports = mongoose.model('productinvoices', ProductInvoice);