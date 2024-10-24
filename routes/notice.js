const express = require('express');
const router = express.Router();
const notice = require("../maplestory/notice");
const errorHandler = require("../util/errorHandler")


/*
최근 게시글 20개만
 */
router.get('/list', async function(req, res) {
    try{
        const apiResponse = await notice.getNoticeList();

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve notice list data'
        });
    }
});


router.get('/detail', async function(req, res) {
    //145096
    const noticeIdStr = req.query.notice_id;

    try{
        let noticeId = Number(noticeIdStr);

        if(isNaN(noticeId)){
           res.status(400).json({
               result :
                   {
                       error : 'Invalid Notice ID'
                   }
               }
           );
        }

        const apiResponse = await notice.getNoticeDetail(noticeId);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
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
        const apiResponse = await notice.getUpdateList();

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
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
               result : {
                   error : 'Invalid Notice ID'
               }
           });
       }

       const apiResponse = await notice.getUpdateDetail(noticeId);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
          result : apiResponse.data
       });
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
       const apiResponse = await notice.getEventList();

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
          result : apiResponse.data
       });
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
              result : {
                  error : 'Invalid Notice ID'
              }
           });
       }

       const apiResponse = await notice.getEventDetail(noticeId);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;


       res.status(200).json({
           result : apiResponse.data
       });
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
        const apiResponse = await notice.getCashShopList();

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        });
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
            result : {
                error : 'Invalid Notice ID'
            }
        });
    }

    const apiResponse = await notice.getCashShopDetail(noticeId);

    const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

    if(apiErrorResponse) return;

    res.status(200).json({
        result : apiResponse.data
    });
   }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve cash shop notice detail list'
        });
   }
});
module.exports = router;