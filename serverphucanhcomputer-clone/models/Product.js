const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = new Schema({
    nameProduct:{
        type:String,
        required:true
    },
    originCategoryProduct:{
        type:String,
        required: true
    },
    ImageurlProduct:{
        type:String,
        required:true
    },
    ImageurlProductIn:{
        type:String
    },
    ImageurlProductAfter:{
        type:String
    },
    ImageurlProductBefore:{
        type:String
    },
    modelProduct:{
        type:String,
        required:true
    },
    versionProduct:{
        type:String
    },
    descriptionProduct:{
        type:String,
        required:true
    },
    remarkProduct:{
        type:String
    },
    priceProduct:{
        type:Number,
        required:true
    },
    categoryproduct:{
        type: Schema.Types.ObjectId,
        ref:'categoryproducts'
    },
    supplierinvoice:{
        type:Schema.Types.ObjectId,
        ref: 'supplierinvoices'
    },
    userAdmin:{
        type:Schema.Types.ObjectId,
        ref: 'userAdmins'
    }
})

module.exports = mongoose.model('products' ,Product);