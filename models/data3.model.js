const { Schema, model } = require("mongoose");

const Data3Schema = Schema({
  tableTypeId: {
    type: String,
  },
  T3C1: {
    type: Number,
  },
  T3C2: {
    type: String,
  },

  T3C3: {
    type: String,
  },
});

module.exports = model("thirdTableData", Data3Schema);
