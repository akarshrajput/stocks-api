const axios = require("axios");
const Stock = require("./../model/stocksModel");

exports.getOverview = async (req, res) => {
  const response = await axios({
    method: "GET",
    url: "http://127.0.0.1:443/api/v1/stocks",
  });
  const stocks = response.data.data.stocks;
  res.status(200).render("overview", {
    stocks,
  });
};
