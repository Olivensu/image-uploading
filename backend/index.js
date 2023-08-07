const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer")
const path = require("path");
require("dotenv").config()

const UploadRoute = require("./routes/UploadRoute")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(UploadRoute)

const PORT = process.env.PORT ;
const DB = process.env.MONGODB;

mongoose.connect(DB, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log(`connnection successful...`);
}).catch((err) => console.log(`not connected`));

app.get('/', (req,res)=>{
    res.send("Welcome to the server.")
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})