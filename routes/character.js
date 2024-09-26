const express = require('express');
const router = express.Router();
const maplestory = require("../maplestory/api");
const util = require("../util/util");
require("dotenv").config();

const API_KEY = process.env.MAPLE_API_KEY;
const url = process.env.MAPLE_API_URL;

router.get('/list', async function (req, res) {
    const characterName = req.query.characterName;
    console.log(characterName);
    try{
        const encodedCharacterName = encodeURIComponent(characterName);
        const ocid = await maplestory.getCharacterOCID(encodedCharacterName);
        console.log(ocid);
        const date = util.getFormattedDateKST();
        const characterData = await maplestory.getCharacterBasic(ocid, date);

        res.json(characterData);
    }catch(error){
        console.error(error);
        res.status(500).json({
            error : 'Failed to retrieve character data'
        });
    }
});

module.exports = router;