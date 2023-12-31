//node using Common JS syntax from ES6 so syntax to import data is as follows

const items = require("../assets/data.js");

exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
