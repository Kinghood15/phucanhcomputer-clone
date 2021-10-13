const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    cart:{
        type:Array
    },
    client:{
        type: Schema.Types.ObjectId,
        ref: 'clients'
    }


})

module.exports = mongoose.model('users',UserSchema);