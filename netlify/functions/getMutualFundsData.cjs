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
  return [headers, fundData];
}

exports.handler = async (req) => {
  let queryArry = [];
  if (req.queryStringParameters["arr"] !== undefined) {
    try {
      queryArry = JSON.parse(req.queryStringParameters["arr"]);
    } catch (e) {
      return {
        statusCode: 200,
        body: "Didn't find the correct query in the url, please write the correct ISIN in the quotes",
      };
    }
  } else {
    return {
      statusCode: 200,
      body: "Found no queries in url",
    };
  }

  const dataurl = "https://www.amfiindia.com/spages/NAVAll.txt";
  let fundData = new Map();
  let csvdata = "";
  await axios.get(dataurl).then(function (response) {
    // handle success
    let headers = "";
    [headers, fundData] = parseData(response.data);
    csvdata = headers + "\r\n";
    queryArry.forEach((element) => {
      if (fundData.has(element)) {
        let rowArr = fundData.get(element);
        let row = rowArr.join(",");
        csvdata = csvdata + row + "\r\n";
      } else {
        let row = `Error,${element}ISIN Div Payout/ ISIN Growth,doesn't exits,please enter,valid,ISIN Growth`;
        csvdata = csvdata + row + "\r\n";
      }
    });
  });
  return {
    statusCode: 200,
    body: csvdata,
  };
};
