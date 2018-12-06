const express = require('express');
const router  = express.Router();
const Course = require('../models/Courses')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api_js', (req, res, next)=>{
  Course.find()
  .then(campos => {
    res.status(200).json(campos)
  })
  .catch(err => {
    throw err
  })
})

module.exports = router;
