const { Schema, model } = require("mongoose");

const Data2Schema = Schema({
  tableTypeId: {
    type: String,
  },
  T2C1: {
    type: Number,
  },
  T2C2: {
    type: String,
  },
  T2C3: {
    type: Number,
  },
  T2C4: {
    type: Date,
  },
  T2C5: {
    type: String,
  },
});

module.exports = model("secondTableData", Data2Schema);
