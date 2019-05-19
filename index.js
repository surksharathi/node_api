


const express = require('express')
const app = express()

// getting request from route
const postget = require("./router/post");

const dotenv = require('dotenv');
dotenv.config();
// appling morgan middleware

const morgan = require('morgan');
// database

const mongoose = require('mongoose');

// database connect

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("databse connected"))

mongoose.connection.on("error", err => console.log(`databse error:${err.message}`));

// middleware

app.use(morgan("dev"));
//app.use(mymiddleware);

app.use("/", postget);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`we are listening port ${port}`));

