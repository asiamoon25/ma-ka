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