

const postcontroller = require('../controller_post/post')

const express = require('express');

const router = express.Router();


router.get('/', postcontroller.getPosts);

module.exports = router;