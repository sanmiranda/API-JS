const express = require('express');
const router  = express.Router();
const Course = require('./models/Course')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api_js', (req, res, next)=>{
  Course.find(), (err,campos)=>{
 if (err){
   next(err)
 }else{
   res.status(200).json({campos:campos})
 }
  }
})

module.exports = router;
