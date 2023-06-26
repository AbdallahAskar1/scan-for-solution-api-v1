const unirest = require("unirest");
const cheerio = require("cheerio");

const selectRandom = () => {
  const userAgents =  [ "Mozilla/5.0 (Windows NT 10.0; Win64; x64)  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
                        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36", 
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",     
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",     
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",     
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36", ];    
 
 var randomNumber = Math.floor(Math.random() * userAgents.length);     return userAgents[randomNumber];     
 }     
 let user_agent = selectRandom();     
 let header = {
      "User-Agent": `${user_agent}`
   }

exports.getOrganicData = (searchText) => {
  return unirest
    .get('https://google.com/search?q='+searchText)
    .headers(header)
    .then((response) => {
      let $ = cheerio.load(response.body);

      // let titles = [];
      // let links = [];
      let snippets = "";

      // $(".yuRUbf > a > h3").each((i, el) => {
      //   titles[i] = $(el).text();
      // });
      // $(".yuRUbf > a").each((i, el) => {
      //   links[i] = $(el).attr("href");
      // });
      $(".g .VwiC3b ").each((_i, el) => {
        snippets += $(el).text();
      });

      const organicResults = [];

      // for (let i = 0; i < 3; i++) {
      //   organicResults[i] = {
      //     // title: titles[i],
      //     // links: links[i],
      //     snippet: snippets[i],
      //   };
      // }
    //   console.log(organicResults);
      return(snippets)

    });

};
