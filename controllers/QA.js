const axios = require('axios');
const { hf_token } = require('../config/auth.config');


async function queryML(data) {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/deepset/roberta-large-squad2",
      data,
      {
        headers: { Authorization: `Bearer ${hf_token} `},
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
module.exports = queryML;