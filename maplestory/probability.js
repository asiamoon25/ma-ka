const axios = require("axios");
const {isValidDate} = require("../util/util");
require('dotenv').config();
const MAPLE_API_URL = process.env.MAPLE_API_URL;

exports.getStarforceResult = async function(count, date, user_api_key) {
    if(!isValidDate(date)) {
        return {
            success : false,
            message : 'Invalid date',
        }
    }

    if(!count || typeof count !== "number") {
        return {
            success : false,
            message : 'Invalid count'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/history/starforce',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : user_api_key
           },
           params : {
               count : count,
               date : date
           }
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
            console.error('Request Error : ', error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getPotentialResult = async function getPotentialResult(count, date, user_api_key) {
    if(!isValidDate(date)) {
        return {
            success : false,
            message : 'Invalid date'
        }
    }

    if(!count || typeof count !== "number") {
        return {
            success : false,
            message : 'Invalid count'
        }
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/history/potential',
            method : 'GET',
            headers : {
                'x-nxopen-api-key' : user_api_key
            },
            params : {
                count : count,
                date : date
            }
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

exports.getCubeResult = async function getCubeResult(count, date, user_api_key) {
    if(!isValidDate(date)) {
        return {
            success : false,
            message : 'Invalid date'
        }
    }
    if(!count || typeof count !== "number") {
        return {
            success : false,
            message : 'Invalid count'
        }
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/history/cube',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : user_api_key
           },
           params : {
               count : count,
               date : date
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch (error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
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