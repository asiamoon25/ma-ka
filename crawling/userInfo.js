const cheerio = require('cheerio');
const axios = require('axios');
const iconv = require('iconv-lite');




 exports.userInfo = async function (userName) {
     const url = `https://maple.gg/u/${encodeURIComponent(userName)}`;
     let avatarImg
     let username
     let guild
     let rank
     let totalRank = '';
     let worldRank = ''
     let classWorldRank =''
     let classTotalRank =''
        try{
            await axios({
                url: url,
                method: "GET",
                responseType: "arraybuffer",
            }).then(async (html) => {
                const content = iconv.decode(html.data, "UTF-8").toString();
                const $ = cheerio.load(content);
                const list = $("div.user-profile section");
                await list.each(async function (i, elem ) {
                     avatarImg = $(elem).find("div.col-6 img").attr("src")
                    username = $(elem).find("div.col-lg-8 h3 b").text()
                    guild = $(elem).find("div.col-lg-2 a").text()
                     rank = $(elem).find("div.col-lg-2 span").text() // 종합 랭킹
                    // let mureongFloor = $(elem).find("div.py-0 h1").text() //무릉 최고 기록
                    totalRank = rank.split('위')[0].replace(/\n/g,"");
                     worldRank = rank.split('위')[1];
                     classWorldRank = rank.split('위')[2];
                     classTotalRank = rank.split('위')[3];
                })
            });

        }catch (err) {
            console.log(err)
        }
    return {url : url, avatarImg: avatarImg, userName:userName,guild:guild, totalRank: totalRank, worldRank:worldRank,classWorldRank:classWorldRank,classTotalRank:classTotalRank}
}