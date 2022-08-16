const express = require('express');
const router = express.Router();
const crawling = require('../crawling/userInfo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/userinfo',function(req,res,next){
  const userName = req.getParameter("username");
  crawling.userInfo(userName).then(r=>{
    res.json({
      "version":"2.0",
      "template":{
        "outputs": [
          {
            "basicCard":{
              "title": "캐릭터 정보",
              "description":r.userName,
              "thumbnail":{
                "imageUrl": r.avatarImg
              },
              "buttons": [
                {
                  "action":"webLink",
                  "label" : "자세히 보기",
                  "webLinkUrl": r.url
                }
              ]
            }
          }
        ]
      }
    })
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
