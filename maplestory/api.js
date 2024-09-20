// import
const axios = require("axios");
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