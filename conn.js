const mongo = require('mongoose');

const conn = async (req , res) => {
    try {
        await mongo
            .connect("mongodb://localhost:27017/TodoApp")
            .then(() => {
                console.log("DB Connected...");
            });
    } catch (error) {
        res.status(400).json({
            message : "Not Connected...Some Error..."
        });
    }
};

conn();