const express = require('express');
const router = express.Router();
const probability = require("../maplestory/probability");
const util = require("../util/util");
const errorHandler = require("../util/errorHandler");
const {response} = require("express");

// starforce 결과 조회
router.get('/starforce', async function(req, res) {
   // 한번에 가져오려는 결과의 갯수
   const countStr = req.query.count;
   const user_api_key = req.query.user_api_key;

   try{
       let count = Number(countStr);
       const date = util.getFormattedDateKST();
       const apiResponse = await probability.getStarforceResult(count, date, user_api_key);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, response);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       })
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve starforce result data'
       });
   }
});

// 잠재능력 재설정 정보 조회
router.get('/potential', async function(req, res) {
   const countStr = req.query.count;
   const user_api_key = req.query.user_api_key;
   try{
       let count = Number(countStr);

       const date = util.getFormattedDateKST();
       const apiResponse = await probability.getPotentialResult(count,date, user_api_key);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, response);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       })
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve potential result data'
       });
   }
});

// 큐브 사용결과 조회
router.get('/cube', async function(req, res) {
    const countStr = req.query.count;
    const user_api_key = req.query.user_api_key;

    try{
        let count = Number(countStr);

        const date = util.getFormattedDateKST();
        const apiResponse = await probability.getCubeResult(count,date, user_api_key);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, response);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve cube result data'
        })
    }

})

module.exports = router;