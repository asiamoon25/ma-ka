const cheerio = require('cheerio');
const axios = require('axios');
const iconv = require('iconv-lite');


exports.eventInfo = async function () {
    const url = `https://maplestory.nexon.com/News/Event/Ongoing`;
    let items=[];

    try{
        await axios({
            url: url,
            method: "GET",
            responseType: "arraybuffer",
        }).then(async (html) => {
            const content = iconv.decode(html.data, "UTF-8").toString();
            const $ = cheerio.load(content);
            const list = $("div.event_board ul > li");



            await list.each(async function (i, elem ) {
                let json = {};
                let buttons=[];
                let buttonsLink={};
                  json.title = $(elem).find('dd.data > p > a').text();
                  json.description = $(elem).find('dd.date > p').text();
                  json.thumbnail = {'imageUrl':$(elem).find('img').attr('src')}
                  buttonsLink.action='webLink'
                  buttonsLink.label='자세히 보기'
                  buttonsLink.webLinkUrl='https://maplestory.nexon.com'+$(elem).find('dd.data > p > a').attr('href');
                  buttons.push(buttonsLink)
                  json.buttons = buttons

                  items.push(json)

            })
            console.log(JSON.stringify(items))
        });
    }catch (err) {
        console.log(err)
    }
    return {items : items}
}