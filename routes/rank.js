const express = require('express');
const router = express.Router();
const rank = require("../maplestory/rank");
const character = require('../maplestory/character');
const util = require("../util/util.js");
const errorHandler = require("../util/errorHandler");



// 랭킹 정보 조회 no user name
router.get('/overall', async function(req, res, next) {
    const worldName = req.query.world_name;
    const worldType = req.query.world_type;
    const className = req.query.class_name;
    const pageStr = req.query.page;

    // required
    const date = req.query.date;

    try{
        if(!util.isValidDate(date)) {
            return res.status(400).send({
                error : 'Invalid parameter name : date'
            });
        }

        const apiResponse = await rank.getRankOverallNoCharacterNameInfo(date, worldName, worldType, className, pageStr);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve rank overall data'
        });
    }
});

// 종합 랭킹 정보 조회
router.get('/overall-character', async function (req, res) {

    const worldName = req.query.world_name;
    const worldType = req.query.world_type;
    const className = req.query.class_name;
    const characterName = req.query.character_name;
    const pageStr = req.query.page;

    // required
    const date = req.query.date;

    try{
        if(!util.isValidDate(date)) {
            return res.status(400).send({
                error : 'Invalid parameter name : date'
            });
        }

        const ocidResponse = await character.getCharacterOCID(encodeURIComponent(characterName));

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await rank.getRankOverallInfo(date, worldName, worldType, className, ocidResponse.data.ocid, pageStr);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve rank overall data'
        });
    }
});


// 유니온 랭킹 정보 조회
/*
현재 캐릭터 조회 시 최근까지 활동했던 캐릭터의 순위만 나오는 현상이 있음.
 */
router.get('/union-rank', async function (req, res) {
    const worldName = req.query.world_name;
    const characterName = req.query.character_name;
    const pageStr = req.query.page;

    const date = req.query.date;

    try{
        if(!util.isValidDate(date)) {
            return res.status(400).send({
               error : 'Invalid parameter name : date'
            });
        }

        const ocidResponse = await character.getCharacterOCID(encodeURIComponent(characterName));

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await rank.getUnionRankInfo(date, worldName, pageStr, ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        });
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve union rank data'
        })
    }
});

// 길드 랭킹 정보 조회
router.get('/guild-rank', async function (req, res) {
   const worldName = req.query.world_name;
   const rankingType = req.query.ranking_type; // ranking_type 0 : 주간 명성치, 1 : 플래그 레이스, 2 : 지하 수로
   const guildName = req.query.guild_name;
   const date = req.query.date;
   const pageStr = req.query.page;

   try{
       if(!util.isValidDate(date)) {
           return res.status(500).send({
               error : 'Invalid parameter name : date'
           });
       }

       let rankingTypeNum = Number(rankingType);

       if(isNaN(rankingTypeNum)) {
            return res.status(400).send({
               error : 'Invalid parameter name : ranking_type'
            });
       }

       const apiResponse = await rank.getGuildRankInfo(worldName, rankingTypeNum, guildName, date, pageStr);

       const apiErrorResponse = errorHandler.handlerErrorResponse(getGuildRankInfo, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve guild rank data'
       });
   }
});

// 무릉도장 랭크
router.get('/dojang-rank', async function (req, res) {
   const date = req.query.date;
   const worldName = req.query.world_name;
   const difficulty = req.query.difficulty;
   const className = req.query.class;
   const characterName = req.query.character_name;
   const page = req.query.page;

   try{
       if(!util.isValidDate(date)) {
           return res.status(500).send({
               error : 'Invalid parameter name : date'
           });
       }
       let difficultyNum = Number(difficulty);

       if(isNaN(difficultyNum)) {
           return res.status(500).send({
               error : 'Invalid parameter name : difficulty'
           });
       }
       const ocidResponse = await character.getCharacterOCID(encodeURIComponent(characterName));

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await rank.dojangRankInfo(date ,worldName, difficultyNum, className, ocidResponse.data.ocid, page);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       })
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve dojang-rank data'
       });
   }
});


router.get('/theseed-rank', async function (req, res) {
    const date = req.query.date;
    const worldName = req.query.world_name;
    const characterName = req.query.character_name;
    const page = req.query.page;

    try{
        if(!util.isValidDate(date)) {
            return res.status(500).json({
                error : 'Invalid parameter : date'
            });
        }
        const ocidResponse = await character.getCharacterOCID(encodeURIComponent(characterName));

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await rank.theseedRankInfo(date, worldName, ocidResponse.data.ocid, page);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        });
    }catch(error) {
        console.log(error);
        res.status(500).json({
           error : 'Failed to retrieve theseed-rank data'
        });
    }

});

router.get('/achievement-rank', async function (req,res){
   const date = req.query.date;
   const characterName = req.query.character_name;
   const page = req.query.page;

   try{
       if(!util.isValidDate(date)) {
           return res.status(500).send({
              error : 'Invalid parameter : date'
           });
       }
       const ocidResponse = await character.getCharacterOCID(encodeURIComponent(characterName));

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await rank.achievementRankInfo(date, ocidResponse.data.ocid, page);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve achievement-rank data'
       });
   }
});

module.exports = router;