// export default function getMutualFundsData() {
//   return "You are receiving data from Netlify";
// }
const axios = require("axios");

function parseData(body) {
  fundData = new Map();
  bodyClean = body.replace(/\r?\n/g, "\n");
  bodyArr = bodyClean.split("\n");
  funds = bodyArr.map((str) => {
    return str.split(";");
  });
  headers = funds[0];

  for (let i = 1; i < funds.length; i++) {
    if (funds[i].length === 6) {
      // let obj = {};
      // for (let j = 0; j < 6; j++) {
      //   obj[headers[j]] = funds[i][j];

      //   fundData.set(funds[i][1], obj);
      // }
      fundData.set(funds[i][1], funds[i]);
    }
  }
  return fundData;
}

exports.handler = async (req) => {
  let queryArry = JSON.parse(req.queryStringParameters["arr"]);
  const dataurl = "https://www.amfiindia.com/spages/NAVAll.txt";
  let fundData = new Map();
  let csvdata = "data:text/csv;charset=utf-8,";
  await axios.get(dataurl).then(function (response) {
    // handle success
    fundData = parseData(response.data);
    queryArry.forEach((element) => {
      let rowArr = fundData.get(element);
      console.log(`input ${element}`, rowArr);
      let row = rowArr.join(",");
      // console.log("row", row);
      csvdata = csvdata + row + "\r\n";
    });
  });
  return {
    statusCode: 200,
    body: csvdata,
  };
};
