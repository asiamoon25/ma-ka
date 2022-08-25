const express = require('express');
const router = express.Router();
const crawling = require('../crawling/userInfo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/userinfo',function(req,res,next){
  const userName = req.body.userRequest.utterance.split(' ')[1].replace(/\n/g,"");
  crawling.userInfo(userName).then(r=>{
    res.json({
      "version":"2.0",
      "template":{
        "outputs": [
          {
            "itemCard": {
              "imageTitle": {
                "title": "캐릭터 정보",
                "description": r.userName
              },
              "title": "",
              "description": "",
              "thumbnail": {
                "imageUrl": r.avatarImg,
                "width": 168,
                "height": 168
              },
              "itemList": [
                {
                  "title": "길드",
                  "description": r.guild
                },
                {
                  "title": "종합 랭킹",
                  "description": r.totalRank
                },
                {
                  "title": "월드 랭킹",
                  "description": r.worldRank
                },
                {
                  "title": "직업 랭킹(월드)",
                  "description": r.classWorldRank
                },
                {
                  "title": "직업 랭킹(전체)",
                  "description": r.classTotalRank
                }
              ],
              "itemListAlignment": "right",
              "itemListSummary": {
                "title": "",
                "description": ""
              },
              "buttons": [
                {
                  "label": "자세히 보기",
                  "action": "webLink",
                  "webLinkUrl": r.url
                }
              ],
              "buttonLayout": "vertical"
            }
          }
        ]
      }
    })
  }).catch(err => {
    console.log(err);
  })
})

router.post('/user-coordi',function(req,res,next){
  const userName = req.body.userRequest.utterance.split(' ')[1].replace(/\n/g,"");
  // const userName = "잉크리트";
  crawling.userCoordi(userName).then(r=>{
    // res.json({"coordiList" : r.coordiList, avatarImg: r.avatarImg})
    res.json({
      "version":"2.0",
      "template":{
        "outputs": [
          {
            "itemCard": {
              "imageTitle": {
                "title": "캐릭터 코디",
                "description": userName
              },
              "title": "",
              "description": "",
              "thumbnail": {
                "imageUrl": r.avatarImg,
                "width": 168,
                "height": 168
              },
              "itemList": [
                {
                  "title": "모자",
                  "description": r.coordiList[0]
                },
                {
                  "title": "헤어",
                  "description": r.coordiList[1]
                },
                {
                  "title": "성형",
                  "description": r.coordiList[2]
                },
                {
                  "title": "상의",
                  "description": r.coordiList[3]
                },
                {
                  "title": "하의",
                  "description": r.coordiList[4]
                },
                {
                  "title": "신발",
                  "description": r.coordiList[5]
                },
                {
                  "title": "무기",
                  "description": r.coordiList[6]
                }
              ],
              "itemListAlignment": "right",
              "itemListSummary": {
                "title": "",
                "description": ""
              },
              "buttons": [
                {
                  "label": "자세히 보기",
                  "action": "webLink",
                  "webLinkUrl": r.url
                }
              ],
              "buttonLayout": "vertical"
            }
          }
        ]
      }
    })

  }).catch(err => {
    console.log(err);
  })
})

router.post('/level',function(req,res,next){
  const param = req.body.userRequest.utterance.split(' ')[1].replace(/\n/g,"");

  let startLevel = param.split(',')[0].trim()
  let endLevel = param.split(',')[1].trim()
  // console.log(req);
  crawling.userLevelUpEx(startLevel,endLevel).then(r=>{
    res.json({"data":{
        "version": "2.0",
        "template": {
          "outputs": [
            {
              "simpleText": {
                "text": r.params + "Exp 입니다."
              }
            }
          ]
        }
      }})
  }).catch(err=>{
    console.log(err)
  })
})

router.post('/boss',function(req,res,next){
  const bossName = req.body.boss
  const difficult = req.body.difficulty
  crawling.boss(bossName, difficult).then(r=>{
    // console.log(r[0].hp1)
    let param = r[0];
    let star = Number(param.diff_star_num)
    let star_imo =''
    for(var i=0;i<star;i++){
      star_imo += "⭐"
    }
    res.json({"version":"2.0",
      "template":{
        "outputs": [
          {
            "itemCard": {
              "imageTitle": {
                "title": "보스 정보",
                "description": ''
              },
              "title": "별 개수",
              "description":  star_imo,
              "thumbnail": {
                "imageUrl": '',
                "width": 168,
                "height": 168
              },
              "itemList": [
                {
                  "title": "보스 이름",
                  "description": param.boss
                },
                {
                  "title": "난이도",
                  "description": param.difficult
                },
                {
                  "title": "레벨",
                  "description": param.level
                },
                {
                  "title": "요구 포스",
                  "description": param.arcane_force !== '' ? param.arcane_force : '없음'
                },
                {
                  "title": "페이즈",
                  "description": param.phase
                },
                {
                  "title": "1페이즈 체력",
                  "description": param.hp1
                },
                {
                  "title": "2페이즈 체력",
                  "description": param.hp2
                },
                {
                  "title": "3페이즈 체력",
                  "description": param.hp3
                },
                {
                  "title": "4페이즈 체력",
                  "description": param.hp4
                },
                {
                  "title": "방어율",
                  "description": param.defense_percent
                },
              ],
              "itemListAlignment": "right",
              "itemListSummary": {
                "title": "",
                "description": ""
              },
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
