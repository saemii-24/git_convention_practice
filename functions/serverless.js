const axios = require("axios");

exports.handler = async function (event, context) {
  const apiKey = process.env.API_KEY;
  const apiUrl =
    "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";

  try {
    const response = await axios.get(apiUrl, {
      params: {
        serviceKey: apiKey,
        numOfRows: 1,
        pageNo: 10,
      },
    });

    const xmlData = response.data;

    return {
      statusCode: 200,
      body: xmlData,
      headers: {
        "Content-Type": "application/xml",
      },
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "에러발생" }),
    };
  }
};
