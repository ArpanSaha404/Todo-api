const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    email : {
        type : String,
        unique : true,
        reqired : true,
    },
    username : {
        type : String,
        unique : true,
        reqired : true,
    },
    password : {
        type : String,
        required : true,
    },
    list : [
        {
        type : mongo.Types.ObjectId,
        ref : "list"
        },
    ],
});

module.exports = mongo.model("user" , userSchema);