// import
const axios = require("axios");
const util = require("../util/util");
const {isValidDate} = require("../util/util");
require('dotenv').config();
const MAPLE_API_KEY = process.env.MAPLE_API_KEY;
const MAPLE_API_URL = process.env.MAPLE_API_URL;

exports.getCharacterOCID = async function getCharacterOCID(characterName) {
    try{
        var ocid;
        const response = await axios({
            url : MAPLE_API_URL + `/maplestory/v1/id?character_name=${characterName}`,
            method: "GET",
            headers: {'x-nxopen-api-key' : MAPLE_API_KEY}
        });

        ocid = response.data.ocid;

        return ocid;
    }catch (error) {
        console.error(error);
        throw error;
    }
}

exports.getCharacterBasicInfo = async function getCharacterBasic(ocid) {
    try{
        if(!ocid || typeof ocid !== 'string') {
            throw new Error('Invalid OCID');
        }

        const response = await axios({
            url : MAPLE_API_URL + `/maplestory/v1/character/basic?ocid=${encodeURIComponent(ocid)}`,
            method: "GET",
            headers: {
                'x-nxopen-api-key' : MAPLE_API_KEY,
                'content-type': 'application/json'
            }
        });

        // console.log('response : ' + JSON.stringify(response.data, null, 2));

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
        }else{
            console.error('Request Error : ', error.message)
        }
        throw error;
    }
}

exports.getCharacterPopularityInfo = async function getCharacterPopularity(ocid) {
    try{
        if(!ocid || typeof ocid !== 'string') {
            throw new Error('Invalid OCID');
        }

        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/character/popularity',
            method: 'GET',
            headers: {'x-nxopen-api-key' : MAPLE_API_KEY},
            params: {
                ocid : encodeURIComponent(ocid)
            }
        });

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
        }else{
            console.error('Request Error : ', error.message)
        }
        throw error;
    }
}

exports.getCharacterStatInfo = async function getCharacterStatInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch (error) {
        if(error.response) {
            console.error('API Error Response : ' , error.response.data);
        }else{
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterHyperStatInfo = async function getCharacterHyperStatInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error){
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
        }else{
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterPropensityInfo = async function getCharacterPropensity(ocid) {

    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch (error) {
        if(error.response) {
            console.error('API Error Response : ' ,error.response.data);
        }else{
            console.error('Request Error : ' , error.message);
        }

        throw error;
    }
}

exports.getCharacterAbilityInfo = async function getCharacterAbilityInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
        }else{
            console.error('Request Error : ' , error.message);
        }

        throw error;
    }
}

exports.getCharacterItemEquipmentInfo = async function getCharacterItemEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }

        throw error;
    }
}

exports.getCharacterCashItemEquipmentInfo = async function getCharacterCashItemEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }

        throw error;
    }
}

exports.getCharacterSymbolEquipmentInfo = async function getCharacterSymbolEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
        }else{
            console.error('Request Error : ', error.message);
        }

        throw error;
    }
}

exports.getSetEffectInfo = async function getSetEffectInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error){
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }

        throw error;
    }
}

exports.getCharacterBeautyEquipmentInfo = async function getCharacterBeautyEquipmentInfo(ocid){
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Error Response : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterAndroidEquipmentInfo = async function getCharacterAndroidEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error){
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterPetEquipmentInfo = async function getCharacterPetEquipmentInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterSkillInfo = async function getCharacterSkillInfo(ocid, advancementLevel) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
    }

    const validLevels = [
        0,1,1.5,2,2.5,3,4, 'hyperpassive', 'hyperactive', 5, 6
    ];

    const isValidAdvancementLevel = validLevels.includes(advancementLevel);

    if(!isValidAdvancementLevel) {
        throw new Error('Invalid AdvancementLevel');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterLinkSkillInfo = async function getCharacterLinkSkillInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterVmatrixInfo = async function getCharacterVmatrixInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Reqeust Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterHexamatrixInfo = async function getCharacterHexamatrixInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid ocid');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }

        throw error;
    }
}

exports.getCharacterHexamatrixStatInfo = async function getcharacterHexamatrixStatInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch (error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
        throw error;
    }
}

exports.getCharacterDojangInfo = async function getCharacterDojangInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }

        throw error;
    }
}

exports.getCharacterUnionInfo = async function getCharacterUnionInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ' , error.message);
        }

        throw error;
    }
}

exports.getCharacterUnionRaiderInfo = async function getCharacterUnionRaiderInfo(ocid){
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
    }
}

exports.getCharacterUnionArtifactInfo = async function getCharacterUnionArtifactInfo(ocid) {
    if(!ocid || typeof ocid !== 'string') {
        throw new Error('Invalid OCID');
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

        console.log(response.data);

        return response.data;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
    }
}