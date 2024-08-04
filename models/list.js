const mongo = require('mongoose');

const listSchema = new mongo.Schema(
    {
        title : {
            type : String,
            reqired : true,
        },
        body : {
            type : String,
            required : true,
        },
        user : [
            {
            type : mongo.Types.ObjectId,
            ref : "user"
            },
        ],
    },
    {
        timestamps : true,
    },
);

module.exports = mongo.model("list" , listSchema);