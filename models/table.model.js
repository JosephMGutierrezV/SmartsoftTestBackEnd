const { Schema, model } = require("mongoose");
const TableSchema = Schema({
  name: {
    type: String,
  },
});

module.exports = model("TableType", TableSchema);
