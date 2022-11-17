const express = require('express');
const router = express.Router();
const crawling = require('../crawling/eventInfo');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/event-info',function(req,res,next){
    crawling.eventInfo().then( r=>{
        res.json({
            "version":"2.0",
            "template": {
                "outputs":[
                    {
                        "listCard": {
                            "header": {
                                "title" : "이벤트 리스트"
                            },
                            "items" : r.items,
                            "buttons": [
                                {
                                    "label": "구경가기",
                                    "action": "block",
                                    "blockId": "62654c249ac8ed78441532de",
                                    "extra": {
                                        "key1": "value1",
                                        "key2": "value2"
                                    }
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
