const express = require('express');
const router = express.Router();
const character = require("../maplestory/character");
const util = require("../util/util");
const maplestory = require("../maplestory/character");
const CharacterDTO = require("../dto/CharacterDTO");
const errorHandler = require('../util/errorHandler');

router.get('/basic-info', async function (req, res) {
    const characterName = req.query.character_name;
    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        // call common error handling function
        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await character.getCharacterBasicInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
           result : apiResponse.data
        });
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
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);


        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;


        const apiResponse = await character.getCharacterPopularityInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;


        res.status(200).json({
            result : apiResponse.data
        })
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
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await character.getCharacterStatInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
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
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;


        const apiResponse = await character.getCharacterHyperStatInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);
       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterPropensityInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       })
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;


       const apiResponse = await character.getCharacterAbilityInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await character.getCharacterItemEquipmentInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        });
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);
       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterCashItemEquipmentInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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

       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterSymbolEquipmentInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getSetEffectInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await character.getCharacterBeautyEquipmentInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        });
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
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const apiResponse = await character.getCharacterAndroidEquipmentInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        });
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterPetEquipmentInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterSkillInfo(ocidResponse.data.ocid, advancementLevel);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterLinkSkillInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       res.status(200).json({
           result : apiResponse.data
       })
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterVmatrixInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterHexamatrixInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterHexamatrixStatInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       })
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
       const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

       const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

       if(ocidErrorResponse) return;

       const apiResponse = await character.getCharacterDojangInfo(ocidResponse.data.ocid);

       const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

       if(apiErrorResponse) return;

       res.status(200).json({
           result : apiResponse.data
       });
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
            res.status(400).json({
                result : {
                    error : 'Invalid Parameter Character Name'
                }
            });
            return
        }

        const encodedCharacterName = encodeURIComponent(characterName);
        const ocidResponse = await character.getCharacterOCID(encodedCharacterName);

        const ocidErrorResponse = errorHandler.handlerErrorResponse(ocidResponse, res);

        if(ocidErrorResponse) return;

        const ocid = ocidResponse.data.ocid;

        if(!ocid || typeof ocid !== 'string') {
            res.status(400).json({
                result : {
                    error : 'Invalid Parameter OCID'
                }
            });

            return
        }

        const apiResponse = await character.getCharacterInfo(ocidResponse.data.ocid);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        });
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character data'
        });
    }
});
module.exports = router;