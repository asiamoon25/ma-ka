const express = require('express');
const router = express.Router();
const maplestory = require("../maplestory/api");
const util = require("../util/util");


// 유니온 정보 조회
router.get('/union-info', async function (req, res) {
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterUnionInfo = await maplestory.getCharacterUnionInfo(ocid);

        res.json(characterUnionInfo);
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
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterUnionRaiderInfo = await maplestory.getCharacterUnionRaiderInfo(ocid);

       res.json(characterUnionRaiderInfo);
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
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterUnionArtifactInfo = await maplestory.getCharacterUnionArtifactInfo(ocid);

       res.json(characterUnionArtifactInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character union artifact data'
       })
   }
});
module.exports = router;