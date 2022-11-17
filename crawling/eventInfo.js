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
                  json.title = $(elem).find('dd.data > p > a').text();
                // console.log(json.title)
                  json.imageUrl = $(elem).find('img').attr('src')
                  json.description = $(elem).find('dd.date > p').text();
                  //console.log($(elem).find('dd.data > p > a').attr('href'))
                  json.link ={'web': $(elem).find('dd.data > p > a').attr('href')};

                  items.push(json)

            })
            // console.log(JSON.stringify(items))
        });
    }catch (err) {
        console.log(err)
    }
    return {items : items}
}