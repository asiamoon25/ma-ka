const express = require('express');
const router = express.Router();
const crawling = require('../crawling/userInfo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/userinfo',function(req,res,next){
  crawling.userInfo("제오스UG").then(r=>{
    console.log(r);
    res.json({"data":r})
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
