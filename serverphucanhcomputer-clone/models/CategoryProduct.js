const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategoryProduct = new Schema({
    nameCategoryProduct:{
        type: String,
        required: true
    },
    userAdmin:{
        type:Schema.Types.ObjectId,
        ref: 'userAdmins'
    }
})

module.exports = mongoose.model('categoryproducts',CategoryProduct);