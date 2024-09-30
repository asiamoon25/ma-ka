const axios = require('axios');
const util = require('../util/util');
require('dotenv').config();

const MAPLE_API_KEY = process.env.MAPLE_API_KEY;
const MAPLE_API_URL = process.env.MAPLE_API_URL;


exports.getOGuildId = async function getOGuildId(guildName, worldName) {
    const validWorldName = [
        '스카니아', '베라', '루나', '제니스', '크로아', '유니온', '엘리시움', '이노시스', '레드', '오로라', '아케인', '노바', '리부트', '리부트2', '버닝', '버닝2', '버닝3'
    ]

    if(!guildName || typeof guildName !== 'string') {
        throw new Error('Invalid GUILD NAME');
    }

    if(!validWorldName.includes(worldName)) {
        throw new Error('Invalid WORLD NAME');
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/guild/id',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               guild_name : guildName,
               world_name : worldName
           }
        });

        return response.data.oguild_id;
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else {
            console.error('Request Error : ', error.message);
        }
    }
}

exports.getGuildBasicInfo = async function getGuildBasicInfo(oGuildId) {
    if(!oGuildId) {
        throw new Error('Invalid GUILD ID');
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/guild/basic',
            method : 'GET',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            },
            params : {
                oguild_id : encodeURIComponent(oGuildId)
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

