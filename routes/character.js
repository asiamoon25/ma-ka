const express = require('express');
const router = express.Router();
const character = require("../maplestory/character");
const util = require("../util/util");
const maplestory = require("../maplestory/character");
const CharacterDTO = require("../dto/CharacterDTO");

router.get('/basic-info', async function (req, res) {
    const characterName = req.query.character_name;
    console.log(characterName);
    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await character.getCharacterOCID(encodedCharacterName);
        const characterData = await character.getCharacterBasicInfo(ocid);

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
        const ocid = await character.getCharacterOCID(encodedCharacterName);
        const characterPopularity = await character.getCharacterPopularityInfo(ocid);

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
        const ocid = await character.getCharacterOCID(encodedCharacterName);
        const characterStatInfo = await character.getCharacterStatInfo(ocid);

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
        const ocid = await character.getCharacterOCID(encodedCharacterName);
        const characterHyperStatInfo = await character.getCharacterHyperStatInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterPropensity = await character.getCharacterPropensityInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterAbilityInfo = await character.getCharacterAbilityInfo(ocid);

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
        const ocid = await character.getCharacterOCID(encodedCharacterName);
        const characterItemEquipmentInfo = await character.getCharacterItemEquipmentInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterCashItemEquipmentInfo = await character.getCharacterCashItemEquipmentInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterSymbolEquipmentInfo = await character.getCharacterSymbolEquipmentInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterSetEffectInfo = await character.getSetEffectInfo(ocid);

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
        const ocid = await character.getCharacterOCID(encodedCharacterName);
        const characterBeautyEquipmentInfo = await character.getCharacterBeautyEquipmentInfo(ocid);

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
        const ocid = await character.getCharacterOCID(encodedCharacterName);
        const characterAndroidEquipmentInfo = await character.getCharacterAndroidEquipmentInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterPetEquipmentInfo = await character.getCharacterPetEquipmentInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterSkillInfo = await character.getCharacterSkillInfo(ocid, advancementLevel);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterLinkSkillInfo = await character.getCharacterLinkSkillInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterVmatrixInfo = await character.getCharacterVmatrixInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterHexamatrixInfo = await character.getCharacterHexamatrixInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterHexamatrixStatInfo = await character.getCharacterHexamatrixStatInfo(ocid);

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
       const ocid = await character.getCharacterOCID(encodedCharacterName);
       const characterDojangInfo = await character.getCharacterDojangInfo(ocid);

       res.json(characterDojangInfo);
   }catch (error) {
       console.error(error);
       res.status(500).json({
           error : 'Failed to retrieve character dojan data'
       })
   }
});

router.get('/info', async function (req,res,next){
    const characterName = req.query.character_name;

    try{

        if(!characterName || typeof characterName !== 'string') {
            res.status(500).json({
                error : 'Invalid Parameter Character Name'
            });
        }
        const ocid = await maplestory.getCharacterOCID(encodeURIComponent(characterName));

        if(!ocid || typeof ocid !== 'string') {
            res.status(500).json({
                error : 'Invalid Parameter OCID'
            });
        }
        const [basicInfo, statInfo, popularityInfo] = await Promise.all([
            maplestory.getCharacterBasicInfo(ocid),
            maplestory.getCharacterStatInfo(ocid),
            maplestory.getCharacterPopularityInfo(ocid),
        ]);

        const characterInfo = new CharacterDTO(
            basicInfo.character_name,
            basicInfo.world_name,
            basicInfo.character_gender,
            basicInfo.character_class,
            basicInfo.character_class_level,
            basicInfo.character_level,
            basicInfo.character_exp,
            basicInfo.character_exp_rate,
            basicInfo.character_guild_name,
            basicInfo.character_image,
            popularityInfo.popularity,
            statInfo.final_stat
        );

        res.json(characterInfo.toJSON());
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character data'
        });
    }
});
module.exports = router;