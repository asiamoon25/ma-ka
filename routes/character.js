const express = require('express');
const router = express.Router();
const maplestory = require("../maplestory/api");
const util = require("../util/util");

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

// 장착한 캐시 장비 정보 조회
router.get('/cashitem-equipment-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterCashItemEquipmentInfo = await maplestory.getCharacterCashItemEquipmentInfo(ocid);

       res.json(characterCashItemEquipmentInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character cash item equipment data'
       });
   }
});

// 장착 심볼 정보 조회
router.get('/symbol-equipment-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterSymbolEquipmentInfo = await maplestory.getCharacterSymbolEquipmentInfo(ocid);

       res.json(characterSymbolEquipmentInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character symbol equipment data'
       });
   }
});

// 적용받고 있는 세트효과 정보 조회
router.get('/set-effect-info', async function(req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterSetEffectInfo = await maplestory.getSetEffectInfo(ocid);

       res.json(characterSetEffectInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character set effect data'
       });
   }
});

// 장착 헤어, 성형, 피부 정보 조회
router.get('/beauty-equipment-info', async function (req,res,next){
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterBeautyEquipmentInfo = await maplestory.getCharacterBeautyEquipmentInfo(ocid);

        res.json(characterBeautyEquipmentInfo);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character beauty equipment data'
        });
    }
});

// 장착 안드로이드 정보 조회
router.get('/android-equipment-info', async function (req,res,next){
    const characterName = req.query.character_name;

    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        const characterAndroidEquipmentInfo = await maplestory.getCharacterAndroidEquipmentInfo(ocid);

        res.json(characterAndroidEquipmentInfo);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character android equipment data'
        });
    }
});

// 장착 펫 정보 조회
router.get('/pet-equipment-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterPetEquipmentInfo = await maplestory.getCharacterPetEquipmentInfo(ocid);

       res.json(characterPetEquipmentInfo);
   }catch(error){
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character pet equipment data'
       });
   }
});

// 캐릭터의 스킬과 하이퍼 링크 스킬 정보를 조회함.
router.get('/skill-info/', async function (req,res,next){
   const characterName = req.query.character_name;
   const advancementLevel = req.query.advancementLevel;
   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterSkillInfo = await maplestory.getCharacterSkillInfo(ocid, advancementLevel);

       res.json(characterSkillInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character skill data'
       });
   }
});

// 장착 링크 스킬 정보 조회
router.get('/link-skill-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterLinkSkillInfo = await maplestory.getCharacterLinkSkillInfo(ocid);

       res.json(characterLinkSkillInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character link skill data'
       });
   }
});

// V 매트릭스 슬롯 정보와 장착한 V 코어 정보를 조회함.
router.get('/vmatrix-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterVmatrixInfo = await maplestory.getCharacterVmatrixInfo(ocid);

       res.json(characterVmatrixInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character vmatrix data'
       });
   }
});

// HEXA 매트릭스에 장착한 HEXA 코어 정보를 조회
router.get('/hexamatrix-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterHexamatrixInfo = await maplestory.getCharacterHexamatrixInfo(ocid);

       res.json(characterHexamatrixInfo);
   }catch(error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character hexamatrix data'
       });
   }
});

// HEXA 매트릭스에 설정한 HEXA 스탯 정보를 조회함.
router.get('/hexamatrix-stat-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterHexamatrixStatInfo = await maplestory.getCharacterHexamatrixStatInfo(ocid);

       res.json(characterHexamatrixStatInfo);
   }catch (error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character hexamatrix stat data'
       })
   }
});

router.get('/dojang-info', async function (req,res,next){
   const characterName = req.query.character_name;

   try{
       const encodedCharacterName = encodeURIComponent(characterName);
       const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
       const characterDojangInfo = await maplestory.getCharacterDojangInfo(ocid);

       res.json(characterDojangInfo);
   }catch (error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character dojan data'
       })
   }
});
module.exports = router;