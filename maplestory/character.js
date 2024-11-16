// import
const axios = require("axios");
const util = require("../util/util");
const {isValidDate} = require("../util/util");
const CharacterDTO = require("../dto/CharacterDTO");
require('dotenv').config();
const MAPLE_API_KEY = process.env.MAPLE_API_KEY;
const MAPLE_API_URL = process.env.MAPLE_API_URL;

exports.getCharacterOCID = async function getCharacterOCID(characterName) {
    try{
        const response = await axios({
            url : MAPLE_API_URL + `/maplestory/v1/id?character_name=${characterName}`,
            method: "GET",
            headers: {'x-nxopen-api-key' : MAPLE_API_KEY}
        });

        return { success : true, data: response.data}
    }catch (error) {
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
            return {
                success : false,
                message: error.response.data
            }
        }else {
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message: error.message
            }
        }
    }
}

exports.getCharacterList = async function getCharacterList(user_api_key) {
    if(user_api_key || typeof user_api_key === 'string') {
        try{
            const response = await axios({
                url : MAPLE_API_URL + '/maplestory/v1/character/list',
                method: 'GET',
                headers: {
                    'x-nxopen-api-key' : user_api_key
                }
            });

            return {
                success : true,
                data: response.data
            }
        }catch(error){
            if(error.response) {
                console.error('API Error Response : ', error.response.data);
                return {
                    success : false,
                    message : error.response.data
                }
            }else {
                console.error('Request Error : ', error.message);
                return {
                    success: false,
                    message : error.message
                }
            }
        }
    }else {
        return {
            success : false,
            message : 'Invalid user_api_key'
        }
    }
}

exports.getCharacterBasicInfo = async function getCharacterBasic(ocid) {
    try{
        if(!ocid || typeof ocid !== 'string') {
            return {
                success : false,
                message : 'Invalid OCID'
            }
        }

        const response = await axios({
            url : MAPLE_API_URL + `/maplestory/v1/character/basic?ocid=${encodeURIComponent(ocid)}`,
            method: "GET",
            headers: {
                'x-nxopen-api-key' : MAPLE_API_KEY,
                'content-type': 'application/json'
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message)
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterPopularityInfo = async function getCharacterPopularity(ocid) {
    try{
        if(!ocid || typeof ocid !== 'string') {
            return {
                success : false,
                message : 'Invalid OCID'
            }
        }

        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/character/popularity',
            method: 'GET',
            headers: {'x-nxopen-api-key' : MAPLE_API_KEY},
            params: {
                ocid : encodeURIComponent(ocid)
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterStatInfo = async function getCharacterStatInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/character/stat',
            method: 'GET',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            },
            params : {
                ocid : encodeURIComponent(ocid)
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterHyperStatInfo = async function getCharacterHyperStatInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }
    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/character/hyper-stat',
            method : 'GET',
            headers : {'x-nxopen-api-key' : MAPLE_API_KEY},
            params : {
                ocid : encodeURIComponent(ocid)
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterPropensityInfo = async function getCharacterPropensity(ocid) {

    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/propensity',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterAbilityInfo = async function getCharacterAbilityInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/ability',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterItemEquipmentInfo = async function getCharacterItemEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/item-equipment',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterCashItemEquipmentInfo = async function getCharacterCashItemEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/cashitem-equipment',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterSymbolEquipmentInfo = async function getCharacterSymbolEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/character/symbol-equipment',
            method : 'GET',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            },
            params : {
                ocid : ocid
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getSetEffectInfo = async function getSetEffectInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/set-effect',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterBeautyEquipmentInfo = async function getCharacterBeautyEquipmentInfo(ocid){
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/character/beauty-equipment',
            method : 'GET',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            },
            params : {
                ocid : ocid
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterAndroidEquipmentInfo = async function getCharacterAndroidEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/android-equipment',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterPetEquipmentInfo = async function getCharacterPetEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/pet-equipment',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterSkillInfo = async function getCharacterSkillInfo(ocid, advancementLevel) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    const validLevels = [
        '0','1','1.5','2','2.5','3','4', 'hyperpassive', 'hyperactive', '5', '6'
    ];

    const isValidAdvancementLevel = validLevels.includes(advancementLevel);

    if(!isValidAdvancementLevel) {
        return {
            success : false,
            message : 'Invalid advancementLevel'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/skill',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid,
               character_skill_grade : advancementLevel
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterLinkSkillInfo = async function getCharacterLinkSkillInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/link-skill',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterVmatrixInfo = async function getCharacterVmatrixInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/vmatrix',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterHexamatrixInfo = async function getCharacterHexamatrixInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/hexamatrix',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterHexamatrixStatInfo = async function getcharacterHexamatrixStatInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/hexamatrix-stat',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterDojangInfo = async function getCharacterDojangInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url  : MAPLE_API_URL + '/maplestory/v1/character/dojang',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterUnionInfo = async function getCharacterUnionInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/user/union',
            method : 'GET',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            },
            params : {
                ocid : ocid
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterUnionRaiderInfo = async function getCharacterUnionRaiderInfo(ocid){
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/user/union-raider',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterUnionArtifactInfo = async function getCharacterUnionArtifactInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/user/union-artifact',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : ocid
           }
        });

        return {
            success : true,
            data : response.data
        }
        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getCharacterInfo = async function getCharacterInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        return {
            success : false,
            message : 'Invalid OCID'
        }
    }

    try{
       const basicInfo = await axios({
           url : MAPLE_API_URL + `/maplestory/v1/character/basic?ocid=${encodeURIComponent(ocid)}`,
           method: "GET",
           headers: {
               'x-nxopen-api-key' : MAPLE_API_KEY,
               'content-type': 'application/json'
           }
       });

       const statInfo = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/stat',
           method: 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               ocid : encodeURIComponent(ocid)
           }
       });

       const popularityInfo = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/character/popularity',
           method: 'GET',
           headers: {'x-nxopen-api-key' : MAPLE_API_KEY},
           params: {
               ocid : encodeURIComponent(ocid)
           }
       });

       const characterInfo = new CharacterDTO(
           basicInfo.data.character_name,
           basicInfo.data.world_name,
           basicInfo.data.character_gender,
           basicInfo.data.character_class,
           basicInfo.data.character_class_level,
           basicInfo.data.character_level,
           basicInfo.data.character_exp,
           basicInfo.data.character_exp_rate,
           basicInfo.data.character_guild_name,
           basicInfo.data.character_image,
           popularityInfo.data.popularity,
           statInfo.data.final_stat
       );


       return {
           success : true,
           data : characterInfo.toJSON()
       }
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}