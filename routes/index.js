var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home_page_temp.ejs', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home_page_temp.ejs', { title: 'Home' });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('home_page_temp.ejs', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('home_page_temp.ejs', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('home_page_temp.ejs', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact_page_temp.ejs', { title: 'Contact Me' });
});

module.exports = router;
