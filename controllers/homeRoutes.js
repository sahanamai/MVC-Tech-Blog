const router = require('express').Router();
const{User,Post,Comment} = require("../models/");
router.get('/', async (req, res) => {
  console.log("jjj")
    try {
     var postData=await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const posts = postData.map((content) => content.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', {
        posts,
       
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //login route
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });














module.exports = router;