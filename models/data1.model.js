const { Schema, model } = require("mongoose");

const Data1Schema = Schema({
  T1C1: {
    type: Number,
  },
  T1C2: {
    type: String,
  },
  T1C3: {
    type: Number,
  },
  T1C4: {
    type: Date,
  },
});

module.exports = model("fisrtsTableData", Data1Schema);
