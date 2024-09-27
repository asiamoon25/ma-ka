const express = require('express');
const router = express.Router();
const maplestory = require("../maplestory/api");
const util = require("../util/util");
require("dotenv").config();

const API_KEY = process.env.MAPLE_API_KEY;
const url = process.env.MAPLE_API_URL;

router.get('/basic-info', async function (req, res) {
    const characterName = req.query.character_name;
    console.log(characterName);
    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterData = await maplestory.getCharacterBasicInfo(ocid);

        res.json(characterData);
    }catch(error){
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character data'
        });
    }
});

// 인기도
router.get('/popularity-info', async function (req, res) {
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterPopularity = await maplestory.getCharacterPopularityInfo(ocid);

        res.json(characterPopularity);
    }catch(error){
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character popularity data'
        })
    }
});


router.get('/stat-info', async function (req, res) {
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterStatInfo = await maplestory.getCharacterStatInfo(ocid);

        res.json(characterStatInfo);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character stat data'
        });
    }
});

// hyper stat
router.get('/hyper-stat-info', async function (req, res) {
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterHyperStatInfo = await maplestory.getCharacterHyperStatInfo(ocid);

        res.json(characterHyperStatInfo);
    }catch (error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character hyper-stat data'
        });
    }
});

// 성향 조회
router.get('/propensity-info', async function(req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterPropensity = await maplestory.getCharacterPropensityInfo(ocid);

       res.json(characterPropensity);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character propensity data'
       });
   }
});

// 어빌리티 조회
router.get('/ability-info', async function(req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterAbilityInfo = await maplestory.getCharacterAbilityInfo(ocid);

       res.json(characterAbilityInfo);
   }catch(error){
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character ability data'
       });
   }
});

// 장착 장비 조회 ( 캐시템 제외)
router.get('/item-equipment-info', async function (req,res,next){
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterItemEquipmentInfo = await maplestory.getCharacterItemEquipmentInfo(ocid);

        res.json(characterItemEquipmentInfo);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character item equipment data'
        });
    }
});

module.exports = router;