const mongoose = require('mongoose');
// const mongo = require('mongoose');


let uri = "mongodb+srv://arpan50saha:todo%401@tododbc.eeuugu2.mongodb.net/newDB?retryWrites=true&w=majority&appName=todoDBC";


// async function conn() {
//     try {
//         await client.connect().then(() => {
//             console.log('DB Connected...');
//         });
//     }
//     catch(error)
//     {
//         throw error;
//     }
// };
// conn();

// async function conn() {
//     try {
//         await client.connect();

//         const database = client.db("todoDB");
//         const col = database.collection("todoDB");

//         const cursor = col.find();
//         await cursor.forEach(doc => console.dir(doc));
//         } finally {
//         await client.close();
//     }
// };
// conn().catch(console.dir);





// const conn = async () => {
//     try {
//         await mongo
//             .connect("mongodb+srv://arpan50saha:todo%4011@tododbc.eeuugu2.mongodb.net/")
//             .then(() => {
//                 console.log("DB Connected...");
//             });
//     } catch (error) {
//         res.status(400).json({
//             message : "Not Connected...Some Error..."
//         });
//         // throw error;
//     }
// };

// conn();

const conn = async () => {
    try {
        await mongoose
            .connect(uri)
            .then(() => {
                console.log("DB Connected...")
            });
    }
    catch(error)
    {
        console.log("DB Not Connected!!!");
    }
};
conn();