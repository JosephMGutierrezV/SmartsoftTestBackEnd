const { Schema, model } = require("mongoose");

const ColumnSchema = Schema({
  tableTypeId: {
    type: String,
  },
  header: {
    type: String,
  },
  dataType: {
    type: String,
  },
  format: {
    type: String,
  },
  required: {
    type: Boolean,
  },
});

module.exports = model("TableStructure", ColumnSchema);
