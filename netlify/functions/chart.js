// netlify/functions/chart.js
const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const apiUrl = "https://api.musixmatch.com/ws/1.1/chart.tracks.get";
    const queryParams = event.queryStringParameters;
    queryParams.apikey = "51a749301d672a7793ad5bd859786140";
    const response = await axios.get(apiUrl, { params: queryParams });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};
