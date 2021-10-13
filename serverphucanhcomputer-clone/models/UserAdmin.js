const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserAdminSchema = new Schema({
    usernameAdmin:{
        type:String,
        required:true,
        unique:true
    },
    passwordAdmin:{
        type:String,
        required:true

    },
    urlImageAdmin:{
        type:String,
        required:true,
        default: "../account.png"
    },
    createdAtUserAdmin:{
        type: Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('userAdmins',UserAdminSchema);