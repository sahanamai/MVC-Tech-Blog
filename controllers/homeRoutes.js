const router = require('express').Router();
const{User,Post,Comment} = require("../models/");
const sequelize = require('../config/connection');
//const withAuth = require('../utils/auth');
router.get('/', (req, res) => {
  console.log(req.session);
  
  Post.findAll({
    attributes: [
      'id',
      'title',
      'date_created',
      'date_updated',
      'post_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id','date_created',
        'date_updated'],
        include: {
          model: User,
          attributes: ['username',  'github']
        }
      },
      {
        model: User,
        attributes: ['username',  'github']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'date_created',
      'date_updated',
      'post_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'date_created','date_updated'],
        include: {
          model: User,
          attributes: ['username',  'github']
        }
      },
      {
        model: User,
        attributes: ['username',  'github']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});










module.exports = router;