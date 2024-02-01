const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  last: {
    type: String,
  },
  buy: {
    type: String,
  },
  sell: {
    type: String,
  },
  volume: {
    type: String,
  },
  base_unit: {
    type: String,
  },
});

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
