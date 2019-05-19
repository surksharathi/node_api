
const Post = require('../model/post');
exports.getPosts = (req, res) => {

    res.json({
        post: [
            {
                "title": "for education"
            },
            {
                "title": "for news"
            }


        ]
    })
}

exports.createPost = (req, res) => {

    const post = new Post(req.body);
    console.log(`creating Post :`, post);
}

