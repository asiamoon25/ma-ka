const express = require('express');
const router = express.Router();
const maplestory = require("../maplestory/api");
const guildApi = require("../maplestory/guildApi");
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


module.exports = router;