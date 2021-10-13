const axios = require('axios');
const baseRoute = process.env.API_BASE_ROUTE;

module.exports.get = async (pathParams) => {
  console.log(baseRoute, pathParams)
  const res =  await axios.get(baseRoute + pathParams);
  return res.data.result;
}