


const express = require('express')
const app = express()

// getting request from route
const { router } = require("./routes/post");


// appling morgan middleware

const morgan = require('morgan');

// middleware

app.use(morgan("dev"));
//app.use(mymiddleware);

app.use("/", router);

const port = 8080;

app.listen(port, () => console.log(`we are listening port ${port}`));

