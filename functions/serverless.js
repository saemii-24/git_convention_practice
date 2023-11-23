import axios from "axios";

exports.handler = async function (event, context) {
  const apiKey = process.env.API_KEY;
  const url =
    "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";
  axios
    .get(url, {
      params: {
        serviceKey: apiKey,
        numOfRows: 1,
        pageNo: 10,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
