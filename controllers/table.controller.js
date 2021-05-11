const TableType = require("../models/table.model");
const TableStructure = require("../models/column.model");

const columnsGet = async (req, res) => {
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

const tableDetailGet = async (req, res) => {
  const { idTabla } = req.query;
  const { name, _id } = await TableType.findById(idTabla);
  const tablaDetalles = await TableStructure.find({ tableTypeId: idTabla });
  res.json({
    _id,
    name,
    tablaDetalles,
  });
};

const createAll = async (req, res) => {
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
    res.json({
      msg: "Se creo la tabla",
    });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    console.error(`[ERROR]: ${error}`);
    return res.json({
      msg: "Ocurrio un error",
    });
  }
};

module.exports = {
  columnsGet,
  tableDetailGet,
  createAll,
};
