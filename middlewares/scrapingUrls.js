const axios = require('axios');
const cheerio = require('cheerio');

async function extractTextFromUrls(urls) {
  const promises = urls.map(url => fetchHtml(url));
  const htmlResponses = await Promise.all(promises);

  const texts = [];
  for (const html of htmlResponses) {
    const text = extractTextFromHtml(html);
    texts.push(text);
  }

  return texts;
}

function fetchHtml(url) {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error('Error fetching HTML: ' + error.message);
    });
}

function extractTextFromHtml(html) {
  const $ = cheerio.load(html);
  const text = $('body').find('p, h1, h2, h3').text();
  return text;
}

module.exports = {
  extractTextFromUrls
};
