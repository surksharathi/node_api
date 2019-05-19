

const postcontroller = require('../controller_post/post')

const express = require('express');

const router = express.Router();


router.get('/', postcontroller.getPosts);
router.get('/user', postcontroller.createPost);

module.exports = router;