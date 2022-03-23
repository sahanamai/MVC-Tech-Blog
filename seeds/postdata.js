const { Post } = require('../models');

const postData = [
    {
        "title": "Hello world!",
        "post_content": " My name is sahana, and I am a future web developer!!!!!!!!",
        "user_id": 1
    },
    {
        "title": "Javascript",
        "post_content": "Favourite",
        "user_id": 2
    },
    {
        "title": "Bootstrap",
        "post_content": " My favourite.",
        "user_id": 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports =  seedPosts;;