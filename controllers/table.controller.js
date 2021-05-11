// TODO: no olvidar borrar estos imports de desarrollo (response)
const { response } = require("express");
const TableType = require("../models/table.model");
const TableStructure = require("../models/column.model");

const columnsGet = async (req, res = response) => {
  let columnas = [];
  await TableType.find({}, function (err, TableTypes) {
    TableTypes.forEach(function (column) {
      columnas.push(column);
    });
  });

  res.json({
    columnas,
  });
};

const tableDetailGet = async (req, res = response) => {
  const { idTabla } = req.query;
  const tablaDetalles = await TableStructure.find({ tableTypeId: idTabla });
  res.json({
    tablaDetalles,
  });
};

const createAll = async (req, res = response) => {
  const { name, columns } = req.body;
  const table = new TableType({ name });

  const { _id } = table;

  try {
    await table.save();
    for (let i = 0; i < columns.length; i++) {
      let { header, dataType, required, tableTypeId } = columns[i];
      tableTypeId = _id;
      const tableDetails = new TableStructure({
        header,
        dataType,
        required,
        tableTypeId,
      });
      await tableDetails.save();
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
  }

  res.json({
    msg: "Se creo la tabla",
  });
};

module.exports = {
  columnsGet,
  tableDetailGet,
  createAll,
};
