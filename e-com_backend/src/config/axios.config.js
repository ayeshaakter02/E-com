const axios = require("axios");

const bdApi = axios.create({
  baseURL: "https://bdapis.com/api/v1.2",
  timeout: 5000,
});

module.exports = bdApi;
