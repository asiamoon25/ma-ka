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
            "version": "2.0",
            "template": {
                "outputs": [
                    {
                        "carousel": {
                            "type": "basicCard",
                            "items": r.items
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
