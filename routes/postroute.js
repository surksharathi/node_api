
const express = require("express");
const postcontroller = require("../controller_post/getroutes");

const router = express.Router();



router.get('/', postcontroller);

exports.modules = router;
