const express = require('express');
const router = express.Router();
const notice = require("../maplestory/notice");
const util = require("../util/util");


/*
최근 게시글 20개만
 */
router.get('/notice/list', async function(req, res) {
    try{
        const noticeList = await notice.getNoticeList();

        return res.json(noticeList);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve notice list data'
        });
    }
});


router.get('/notice/detail', async function(req, res) {
    //145096
    const noticeIdStr = req.query.notice_id;

    try{
        let noticeId = Number(noticeIdStr);

        if(isNaN(noticeId)){
           res.status(500).json({
               error : 'Invalid Notice ID'
           });
        }

        const noticeDetail = await notice.getNoticeDetail(noticeId);

        res.json(noticeDetail);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve notice detail data'
        })
    }
});


// 메이플스토리 업데이트에 최근 등록된 게시글 20개를 조회
router.get('/update/list', async function(req, res) {
    try{
        const updateList = await notice.getUpdateList();

        res.json(updateList);
    }catch(error) {
        console.error(error);
        res.status(500).json({
           error : 'Failed to retrieve notice detail data'
        });
    }
});

// 업데이트 게시글 세부 사항 조회
router.get('/update/detail', async function(req,res){
   const noticeIdStr = req.query.notice_id;

   try{
       let noticeId = Number(noticeIdStr);

       if(isNaN(noticeId)){
           res.status(500).json({
               error : 'Invalid Notice ID'
           });
       }

       const updateDetail = await notice.getUpdateDetail(noticeId);

       res.json(updateDetail);
   }catch(error) {
       console.error(error);
       res.status(500).json({
          error : 'Failed to retrieve update detail data'
       });
   }
});

// 진행 중 이벤트 공지 20개 조회
router.get('/event/list', async function(req, res) {
   try{
       const eventList = await notice.getEventList();

       res.json(eventList);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve event list'
       });
   }
});

// 이벤트 상세 조회
router.get('/event/detail', async function(req, res) {
   //973
    const noticeIdStr = req.query.notice_id;

   try{
       let noticeId = Number(noticeIdStr);
       if(isNaN(noticeId)){
           res.status(500).json({
              error : 'Invalid Notice ID'
           });
       }

       const eventDetail = await notice.getEventDetail(noticeId);

       res.json(eventDetail);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve event detail'
       });
   }
});

/*
캐시샵 공지 목록 20개 조회
 */
router.get('/cashshop/list', async function(req, res) {
    try{
        const cashShopList = await notice.getCashShopList();

        res.json(cashShopList);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve cash shop notice list'
        });
    }
});

/*
캐시샵 공지 자세히 보기

test notice_id = 400
 */
router.get('/cashshop/detail', async function(req, res) {
   const noticeIdStr = req.query.notice_id;
   try{
    let noticeId = Number(noticeIdStr);
    if(isNaN(noticeId)){
        res.status(500).json({
            error : 'Invalid Notice ID'
        });
    }

    const cashshopDetail = await notice.getCashShopDetail(noticeId);

    res.json(cashshopDetail);
   }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve cash shop notice detail list'
        });
   }
});
module.exports = router;