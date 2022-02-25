const sequelize = require('../config/connection');
const { User, Post,Comment } = require('../models');

const userData = require('./userdata.json');
const postData = require('./postdata.json');
const commentData = require('./comment.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});
const Posts = await Post.bulkCreate(postData,{
    individualHooks: true,
    returning:true,
});

await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
});

process.exit(0);

 
};
seedDatabase();
