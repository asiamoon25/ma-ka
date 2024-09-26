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

exports.getCharacterBasic = async function getCharacterBasic(ocid, date) {
    try{
        if(!ocid || typeof ocid !== 'string') {
            throw new Error('Invalid OCID');
        }
        if(!isValidDate(date)) {
            throw new Error('Invalid date format. Expected YYYY-MM-DD')
        }
        console.log(date);

        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/character/basic',
            method: "GET",
            headers: {
                'x-nxopen-api-key' : MAPLE_API_KEY,
                'content-type': 'application/json'
            },
            params: {
                ocid: ocid,
                date: date
            }
        });

        console.log(response);

        return response;
    }catch(error) {
        if(error.response) {
            console.error('API Error Reponse : ' , error.response.data);
        }else{
            console.error('Request Error : ', error.message)
        }
        throw error;
    }
}