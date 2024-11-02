const express = require('express');
const router = express.Router();
const character = require("../maplestory/character");
const util = require("../util/util");
const errorHandler = require("../util/errorHandler");

// 유니온 정보 조회
router.get('/union-info', async function (req, res) {
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await character.getCharacterUnionInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character union data'
        })
    }
});

// 유니온에 배치된 공격대원 효과 및 공격대 점령 효과 등 상세 정보를 조회
router.get('/union-raider-info', async function (req, res) {
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterUnionRaiderInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       })
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character union raider data'
       });
   }
});

// 유니온 아티팩트 정보 조회
router.get('/union-artifact-info', async function (req, res) {
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterUnionArtifactInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character union artifact data'
       })
   }
});
module.exports = router;