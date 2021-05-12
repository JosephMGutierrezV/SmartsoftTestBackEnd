const TableType = require("../models/table.model");
const TableStructure = require("../models/column.model");

const columnsGet = async (req, res) => {
  console.group();
  console.log(`[EMPEZANDO:{tableDetailGet}]`);
  let columnas = [];
  await TableType.find({}, function (err, TableTypes) {
    TableTypes.forEach(function (column) {
      columnas.push(column);
    });
  });
  console.log(`[COLUMNAS: ${JSON.stringify(columnas)}]`);
  console.groupEnd();
  res.json({
    columnas,
  });
};

const tableDetailGet = async (req, res) => {
  console.group();
  console.log(`[EMPEZANDO:{tableDetailGet}]`);
  const { idTabla } = req.query;
  try {
    const { name, _id } = await TableType.findById(idTabla);
    const tablaDetalles = await TableStructure.find({ tableTypeId: idTabla });
    console.log(`[DETALLES: ${JSON.stringify(tablaDetalles)}]`);
    console.groupEnd();
    res.json({
      _id,
      name,
      tablaDetalles,
    });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    console.groupEnd();
    return res.json({
      msg: "Ocurrio un error",
    });
  }
};

const createAll = async (req, res) => {
  console.group();
  console.log(`[EMPEZANDO:{createAll}]`);
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
    console.log(`[DATACREADA]`);
    console.groupEnd();
    res.json({
      msg: "Se creo la tabla",
    });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    console.groupEnd();
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
