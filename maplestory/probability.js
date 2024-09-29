const axios = require("axios");
const util = require("../util/util");
const {isValidDate} = require("../util/util");
require('dotenv').config();
const MAPLE_API_KEY = process.env.MAPLE_API_KEY;
const MAPLE_API_URL = process.env.MAPLE_API_URL;

exports.getStarforceResult = async function(count, date) {
    if(!isValidDate(date)) {
        throw new Error("Invalid date");
    }

    if(!count || typeof count !== "number") {
        throw new Error("Invalid count");
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/history/starforce',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               count : count,
               date : date
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
    }
}

exports.getPotentialResult = async function getPotentialResult(count, date) {
    if(!isValidDate(date)) {
        throw new Error("Invalid date");
    }

    if(!count || typeof count !== "number") {
        throw new Error("Invalid count");
    }

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/history/potential',
            method : 'GET',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            },
            params : {
                count : count,
                date : date
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

exports.getCubeResult = async function getCubeResult(count, date) {
    if(!isValidDate(date)) {
        throw new Error("Invalid date");
    }
    if(!count || typeof count !== "number") {
        throw new Error("Invalid count");
    }

    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/history/cube',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               count : count,
               date : date
           }
        });

        console.log(response.data);

        return response.data;
    }catch (error) {
        if(error.response) {
            console.error('API Request Error : ', error.response.data);
        }else{
            console.error('Request Error : ', error.message);
        }
    }
}