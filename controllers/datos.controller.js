const fisrtsTableData = require("../models/data1.model");
const secondTableData = require("../models/data2.model");
const thirdTableData = require("../models/data3.model");
const TableType = require("../models/table.model");

const createData = async (req, res) => {
  const { tableTypeId } = req.body;

  try {
    const isExist = await TableType.findById(tableTypeId);
    const { name } = isExist;
    if (name == "Tabla 1") {
      const { tableTypeId, T1C1, T1C2, T1C3, T1C4 } = req.body;
      const table1 = new fisrtsTableData({
        tableTypeId,
        T1C1,
        T1C2,
        T1C3,
        T1C4,
      });
      await table1.save();
      res.json({
        msg: "se creo el item",
      });
    } else if (name == "Tabla 2") {
      const { tableTypeId, T2C1, T2C2, T2C3, T2C4, T2C5 } = req.body;
      const table2 = new secondTableData({
        tableTypeId,
        T2C1,
        T2C2,
        T2C3,
        T2C4,
        T2C5,
      });
      await table2.save();
      res.json({
        msg: "se creo el item",
      });
    } else if (name == "Tabla 3") {
      const { tableTypeId, T3C1, T3C2, T3C3 } = req.body;
      const table3 = new thirdTableData({ tableTypeId, T3C1, T3C2, T3C3 });
      await table3.save();
      res.json({
        msg: "se creo el item",
      });
    } else {
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.json({
      msg: "Ocurrio un error",
    });
  }
};

const deleteData = async (req, res) => {
  const { id, tableTypeId } = req.params;
  try {
    const isExist = await TableType.findById(tableTypeId);
    const { name } = isExist;
    if (name == "Tabla 1") {
      const deleteData = await fisrtsTableData.findByIdAndDelete(id);
      res.json({
        deleteData,
      });
    } else if (name == "Tabla 2") {
      const deleteData = await secondTableData.findByIdAndDelete(id);
      res.json({
        deleteData,
      });
    } else if (name == "Tabla 3") {
      const deleteData = await thirdTableData.findByIdAndDelete(id);
      res.json({
        deleteData,
      });
    } else {
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.json({
      msg: "Ocurrio un error",
    });
  }
  res.json({
    id,
  });
};

const getData = async (req, res) => {
  const { idTabla } = req.query;
  try {
    const isExist = await TableType.findById(idTabla);
    const { name } = isExist;
    if (name == "Tabla 1") {
      const data = await fisrtsTableData.find({ tableTypeId: idTabla });
      res.json({
        data,
      });
    } else if (name == "Tabla 2") {
      const data = await secondTableData.find({ tableTypeId: idTabla });
      res.json({
        data,
      });
    } else if (name == "Tabla 3") {
      const data = await thirdTableData.find({ tableTypeId: idTabla });
      res.json({
        data,
      });
    } else {
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.json({
      msg: "Ocurrio un error",
    });
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;
  const { tableTypeId, ...resto } = req.body;
  try {
    const isExist = await TableType.findById(tableTypeId);
    const { name } = isExist;
    if (name == "Tabla 1") {
      const updateFirst = await fisrtsTableData.findByIdAndUpdate(id, resto);
      res.json({
        msg: "Se actualizo la data.",
        updateFirst,
      });
    } else if (name == "Tabla 2") {
      const updateSecond = await secondTableData.findByIdAndUpdate(id, resto);
      res.json({
        msg: "Se actualizo la data.",
        updateSecond,
      });
    } else if (name == "Tabla 3") {
      const updateThird = await thirdTableData.findByIdAndUpdate(id, resto);
      res.json({
        msg: "Se actualizo la data.",
        updateThird,
      });
    } else {
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.json({
      msg: "Ocurrio un error",
    });
  }
};

module.exports = {
  createData,
  deleteData,
  getData,
  updateData,
};
