const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');


User.hasMany(Post, {
    foreignKey: 'userId',
  
});

Post.belongsTo(User, {
    foreignKey: 'userId'
});
User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
module.exports = { User, Post, Comment };
