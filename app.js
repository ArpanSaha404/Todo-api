const path = require('path');
const express = require('express');
const Cors = require('cors');
const auth = require('./routes/auth');
const list = require('./routes/list');
require('./conn');

const app = express();
app.use(express.json());
app.use(Cors());

// app.get('/' , (req , res) => {
//     res.send("Hello...");
// });

app.use("/api/v1" , auth);
app.use("/api/v1" , list);

app.get("/" , (req , res) => {
    app.use(express.static(path.resolve(__dirname , "frontend" , "build")));
    res.sendFile(path.resolve(__dirname , "frontend" , "build" , "index.html"));
});

app.listen(1000 , () => {
    console.log("Server Started...");
});