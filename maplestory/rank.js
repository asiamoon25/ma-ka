const axios = require('axios');
const util = require('../util/util');
require('dotenv').config();

const MAPLE_API_KEY = process.env.MAPLE_API_KEY;
const MAPLE_API_URL = process.env.MAPLE_API_URL;


exports.getRankOverallInfo = async function getRankOverallInfo(date , worldName, worldType, className, ocid, pageStr) {
    const params = {};

    params.date = date;

    if(worldType) {
        params.world_type = worldType;
    }

    if(util.isIncludeWorld(worldName)) {
        params.world_name = worldName;
    }

    if(util.isIncludeClassName(className) !== null) {
        params.class = util.isIncludeClassName(className);
    }

    if(ocid && typeof ocid === 'string') {
        params.ocid = ocid;
    }

    if(pageStr) {
        let page = Number(pageStr);
        params.page = !isNaN(page) ? Number(page) : 1;
    }else {
        params.page = 1;
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/ranking/overall',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : params
        });


        return {success : true, data: response.data}
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else {
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getUnionRankInfo = async function getUnionRankInfo(date, worldName,pageStr,ocid) {
    const params = {};

    params.date = date;

    if(util.isIncludeWorld(worldName)) {
        params.world_name = worldName;
    }

    if(ocid && typeof ocid === 'string') {
        params.ocid = ocid;
    }

    if(pageStr) {
        let page = Number(pageStr);
        params.page = !isNaN(page) ? Number(page) : 1;
    }else{
        params.page = 1;
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/ranking/union',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : params
        });


        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        } else {
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getGuildRankInfo = async function getGuildRankInfo(worldName, rankingType, guildName, date, pageStr) {
    const params = {};

    params.date = date;
    params.ranking_type = rankingType;
    if(util.isIncludeWorld(worldName)) {
        params.world_name = worldName;
    }

    if(guildName && typeof guildName === 'string') {
        params.guild_name = guildName;
    }

    if(pageStr) {
        let page = Number(pageStr);
        params.page = !isNaN(page) ? Number(page) : 1;
    }else{
        params.page = 1;
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/ranking/guild',
            method : 'GET',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            },
            params : params
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        } else {
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.dojangRankInfo = async function dojangRankInfo(date ,worldName, difficultyNum, className, ocid, pageStr) {
    const params = {};

    params.date = date;
    params.difficulty = difficultyNum;

    if(util.isIncludeClassName(className) !== null) {
        params.class = util.isIncludeClassName(className);
    }

    if(ocid && typeof ocid === 'string') {
        params.ocid = ocid;
    }

    if(util.isIncludeWorld(worldName)) {
        params.world_name = worldName;
    }

    if(pageStr && typeof pageStr === 'string') {
        let page = Number(pageStr);
        params.page = !isNaN(page) ? Number(page) : 1;
    }else {
        params.page = 1;
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/ranking/dojang',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : params
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else {
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.theseedRankInfo = async function theseedRankInfo(date, worldName, ocid, pageStr) {
    const params = {};

    params.date = date;

    if(util.isIncludeWorld(worldName)){
        params.world_name = worldName;
    }

    if(ocid && typeof ocid === 'string') {
        params.ocid = ocid;
    }

    if(pageStr) {
        let page = Number(pageStr);
        params.page = !isNaN(page) ? page : 1;
    }else {
        params.page = 1;
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/ranking/theseed',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : params
        });

        return {
            success : true,
            data : response.data
        };

    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else {
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.achievementRankInfo = async function achievementRankInfo(date, ocid, pageStr) {
    const params = {};

    params.date = date;

    if(ocid && typeof ocid === 'string') {
        params.ocid = ocid;
    }

    if(pageStr) {
        let page = Number(pageStr);
        params.page = !isNaN(page) ? page : 1;
    }else {
        params.page = 1;
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/ranking/achievement',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : params
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error){
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else {
            console.error('Request Error : ' , error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}