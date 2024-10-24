const express = require('express');
const router = express.Router();
const character = require("../maplestory/character");
const guildApi = require("../maplestory/guild");
const util = require("../util/util");
const errorHandler = require("../util/errorHandler");

router.get('/basic-info', async function (req, res) {
    const guildName = req.query.guild_name;
    const worldName = req.query.world_name;

    try{
        const oGuildIdResponse = await guildApi.getOGuildId(guildName, worldName);

        const oGuildIdErrorResponse = errorHandler.handlerErrorResponse(oGuildIdResponse, res);

        if(oGuildIdErrorResponse) return;

        const apiResponse = await guildApi.getGuildBasicInfo(oGuildId);

        const apiErrorResponse = errorHandler.handlerErrorResponse(apiResponse, res);

        if(apiErrorResponse) return;

        res.status(200).json({
            result : apiResponse.data
        })
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve guild basic info data'
        })
    }
});

router.get('/world-info', async function (req, res) {
   try{
       const getWorldInfoList =  guildApi.getWorldInfoList();

       res.json(getWorldInfoList);
   }catch (error) {
       console.error(error);
       res.status(500).json({
           error: 'Failed to retrieve world info data'
       })
   }
});

module.exports = router;