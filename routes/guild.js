const express = require('express');
const router = express.Router();
const character = require("../maplestory/character");
const guildApi = require("../maplestory/guild");
const util = require("../util/util");

router.get('/basic-info', async function (req, res) {
    const guildName = req.query.guild_name;
    const worldName = req.query.world_name;

    try{
        const oGuildId = await guildApi.getOGuildId(guildName, worldName);
        console.log(oGuildId);
        const getGuildBasicInfo = await guildApi.getGuildBasicInfo(oGuildId);

        res.json(getGuildBasicInfo);
    }catch(error) {
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve guild basic info data'
        })
    }
});

router.get('/world-info', async function (req, res) {
   try{
       const getWorldInfoList = await guildApi.getWorldInfoList();

       res.json(getWorldInfoList);
   }catch (error) {
       console.error(error);
       res.status(500).json({
           error: 'Failed to retrieve world info data'
       })
   }
});

module.exports = router;