const mongoose = require('mongoose');
const posts = require('../models/post');

const Schema = mongoose.Schema

const UserSchema = Schema({
    _id: Schema.Types.ObjectId,
    firstname : {
        type : "String",
        required : true,
    },
    lastname : {
        type : "String",
        required : true
    },
    username : {
        type : "String",
        unique : true,
        required : true
    },
    password : {
        type : "String",
        required : true
    },


},{
    timestamps: true,  
}) 


module.exports = mongoose.model("User", UserSchema);