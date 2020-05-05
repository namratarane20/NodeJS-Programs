const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/',async function (req, res) {
    try {
        const posts = await Post.find();
        res.json(posts)
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async function (req, res) {
    console.log(req.body)
    console.log(typeof (req.body))
    res.send(req.body)

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savePost = await post.save()
        res.json(savePost)
    }
    catch (err) {
        res.json({ message: err })
    }
})


module.exports = router;