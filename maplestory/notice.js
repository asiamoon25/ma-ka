const axios = require("axios");
const util = require("../util/util");
require('dotenv').config();
const MAPLE_API_KEY = process.env.MAPLE_API_KEY;
const MAPLE_API_URL = process.env.MAPLE_API_URL;

exports.getNoticeList = async function getNoticeList() {

    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/notice',
            method: "GET",
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ' ,error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ',error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getNoticeDetail = async function getNoticeDetail(noticeId) {
    try{
        if(!noticeId || typeof noticeId !== 'number') {
            return {
                success : false,
                message : 'Invalid Notice ID'
            }
        }

        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/notice/detail',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               notice_id : noticeId
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ',error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else{
            console.error('Request Error : ',error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getUpdateList = async function getUpdateList() {
    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/notice-update',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           }
        });


        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error(error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else {
            console.error(error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getUpdateDetail = async function getUpdateDetail(noticeId) {
    try{
        if(!noticeId || typeof noticeId !== 'number') {
            return {
                success : false,
                message : 'Invalid Notice ID'
            }
        }

        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/notice-update/detail',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               notice_id : noticeId
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

exports.getEventList = async function getEventList() {
    try{
        const response = await axios({
            url : MAPLE_API_URL + '/maplestory/v1/notice-event',
            headers : {
                'x-nxopen-api-key' : MAPLE_API_KEY
            }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ',error.response.data);
            return {
                success : false,
                message : error.response.data
            }
        }else {
            console.error('Request Error : ',error.message);
            return {
                success : false,
                message : error.message
            }
        }
    }
}

exports.getEventDetail = async function getEventDetail(noticeId) {
    try{
        if(!noticeId || typeof noticeId !== 'number') {
            return {
                success : false,
                message : 'Invalid Notice ID'
            }
        }

        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/notice-event/detail',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               notice_id : noticeId
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

exports.getCashShopList = async function getCashShopList() {
    try{
        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/notice-cashshop',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ',error.response.data);
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

exports.getCashShopDetail = async function getCashShopDetail(noticeId) {
    try {
        if (!noticeId || typeof noticeId !== 'number') {
            return {
                success : false,
                message : 'Invalid Notice ID'
            }
        }

        const response = await axios({
           url : MAPLE_API_URL + '/maplestory/v1/notice-cashshop/detail',
           method : 'GET',
           headers : {
               'x-nxopen-api-key' : MAPLE_API_KEY
           },
           params : {
               notice_id : noticeId
           }
        });

        return {
            success : true,
            data : response.data
        }
    }catch(error) {
        if(error.response) {
            console.error('API Request Error : ',error.response.data);
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