const Stock = require("./../model/stocksModel");

exports.getAllStocks = async (req, res) => {
  const stocks = await Stock.find();
  res.status(200).json({
    status: "success",
    results: stocks.length,
    data: {
      stocks,
    },
  });
};

exports.createStock = async (req, res) => {
  const newStock = await Stock.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: newStock,
    },
  });
};
