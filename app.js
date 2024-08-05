const express = require('express');
const Cors = require('cors');
const auth = require('./routes/auth');
const list = require('./routes/list');
require('./conn');

const app = express();
app.use(express.json());
app.use(Cors());

app.get('/hello' , (req , res) => {
    res.send("Hello...");
});

app.use("/api/v1" , auth);
app.use("/api/v1" , list);

app.listen(3000 , () => {
    console.log("Server Started...");
});