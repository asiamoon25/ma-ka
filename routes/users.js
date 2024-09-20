const express = require('express');
const router = express.Router();
var mapleApi = require('../maplestory/api');
/*
http://localhost:8080/users/
 */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/ocid/:characterName', async function(req, res, next) {
    const characterName = req.params.characterName;
    const ocid = await mapleApi.getCharacterOCID(characterName);

    if(!ocid) {
        console.log('OCID not found in the response');
    }
    res.send(`respond with ${ocid}`);
});


module.exports = router;
