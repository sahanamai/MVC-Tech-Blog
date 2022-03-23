const { Comment } = require('../models');

const commentData = [
    {
        "comment_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare vestibulum arcu non pulvinar. Donec nibh neque, cursus sed tristique ut, imperdiet ac purus.",
        "user_id": 1,
        "post_id": 1
    },
    {
        "comment_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare vestibulum arcu non pulvinar. Donec nibh neque, cursus sed tristique ut, imperdiet ac purus.",
        "user_id": 2,
        "post_id": 2
    },
    {
        "comment_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare vestibulum arcu non pulvinar. Donec nibh neque, cursus sed tristique ut, imperdiet ac purus.",
        "user_id": 3,
        "post_id": 3
    }
]
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;