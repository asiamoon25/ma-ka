const express = require('express');
const router = express.Router();
const rank = require("../maplestory/rank");
const character = require('../maplestory/api');
const util = require("../util/util.js");


// 종합 랭킹 정보 조회
router.get('/overall', async function (req, res) {

    const worldName = req.query.world_name;
    const worldType = req.query.world_type;
    const className = req.query.class_name;
    const characterName = req.query.character_name;
    const pageStr = req.query.page;

    // required
    const date = req.query.date;

    try{
        if(!util.isValidDate(date)) {
            return res.status(500).send({
                error : 'Invalid parameter name : date'
            });
        }

        let ocid;
        if(characterName && typeof characterName === 'string') {
          ocid = await character.getCharacterOCID(encodeURIComponent(characterName));
        }

        const rankOverallInfo = await rank.getRankOverallInfo(date,worldName,worldType,className, ocid, pageStr);

        res.json(rankOverallInfo);
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
            return res.status(500).send({
               error : 'Invalid parameter name : date'
            });
        }

        let ocid;
        if(characterName && typeof characterName === 'string') {
            ocid = await character.getCharacterOCID(encodeURIComponent(characterName));
        }
        console.log("ocid is "+ocid);
        const unionRankInfo = await rank.getUnionRankInfo(date,worldName,pageStr, ocid);

        res.json(unionRankInfo);
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
            return res.status(500).send({
               error : 'Invalid parameter name : ranking_type'
            });
       }
       const getGuildRankInfo = await rank.getGuildRankInfo(worldName, rankingTypeNum, guildName, date, pageStr);

       res.json(getGuildRankInfo);
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
       let ocid;
       if(characterName && typeof characterName === 'string') {
           ocid = await character.getCharacterOCID(encodeURIComponent(characterName));
       }
       console.log(ocid);
       const dojangRankInfo = await rank.dojangRankInfo(date, worldName, difficultyNum, className, ocid, page);
       res.json(dojangRankInfo);
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
        let ocid;
        if(characterName && typeof characterName === 'string') {
            ocid = await character.getCharacterOCID(encodeURIComponent(characterName));
        }

        const theseedRankInfo = await rank.theseedRankInfo(date, worldName, ocid, page);

        res.json(theseedRankInfo);
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
       let ocid;
       if(characterName && typeof characterName === 'string') {
           ocid = await character.getCharacterOCID(encodeURIComponent(characterName));
       }

       const achievementRankInfo = await rank.achievementRankInfo(date, ocid, page);

       res.json(achievementRankInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve achievement-rank data'
       });
   }
});

module.exports = router;