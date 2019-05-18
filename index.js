


const express = require('express')
const app = express()

// getting request from route
const { getPost } = require("./routes/postroute");


// appling morgan middleware

const morgan = require('morgan');

const mymiddleware = (req, res, next) => {

    console.log("Middleware applied");
    next();
}

// middleware

app.use(morgan("dev"));
app.use(mymiddleware);

app.use('/', getPost);

const port = 8080;

app.listen(port, () => console.log(`we are listening port ${port}`));

