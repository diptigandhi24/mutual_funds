// export default function getMutualFundsData() {
//   return "You are receiving data from Netlify";
// }

exports.handler = async (req, context) => {
  console.log("req and context", req.queryStringParameters);
  console.log("decode", JSON.parse(req.queryStringParameters["arr"]));
  return {
    statusCode: 200,
    body: `name,date,count,description,replaces_product,approved
    "Inflatable Elephant, African", 2013-09-23,5,"Found in Africa.
    They live in dense forests, mopane and miombo woodlands, Sahelian scrub or deserts.",null,true
    Large Mouse,2013-08-19,3,"A ""largish"" mouse",General Mouse,false,`,
  };
};
