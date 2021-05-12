const fisrtsTableData = require("../models/data1.model");
const secondTableData = require("../models/data2.model");
const thirdTableData = require("../models/data3.model");
const TableType = require("../models/table.model");

const createData = async (req, res) => {
  console.group();
  console.log(`[EMPEZANDO:{createData}]`);
  const { tableTypeId } = req.body;
  try {
    const isExist = await TableType.findById(tableTypeId);
    const { name } = isExist;
    if (name == "Tabla 1") {
      const { tableTypeId, T1C1, T1C2, T1C3, T1C4 } = req.body;
      const tabla = new fisrtsTableData({
        tableTypeId,
        T1C1,
        T1C2,
        T1C3,
        T1C4,
      });
      await tabla.save();
      console.log(`[DATOCREADO: ${JSON.stringify(tabla)}]`);
      console.groupEnd();
      const data = await fisrtsTableData.find({ tableTypeId: tableTypeId });
      res.json({
        tableTypeId,
        tabla: data,
      });
    } else if (name == "Tabla 2") {
      const { tableTypeId, T2C1, T2C2, T2C3, T2C4, T2C5 } = req.body;
      const tabla = new secondTableData({
        tableTypeId,
        T2C1,
        T2C2,
        T2C3,
        T2C4,
        T2C5,
      });
      await tabla.save();
      console.log(`[DATOCREADO: ${JSON.stringify(tabla)}]`);
      console.groupEnd();
      const data = await secondTableData.find({ tableTypeId: tableTypeId });
      res.json({
        tableTypeId,
        tabla: data,
      });
    } else if (name == "Tabla 3") {
      const { tableTypeId, T3C1, T3C2, T3C3 } = req.body;
      const tabla = new thirdTableData({ tableTypeId, T3C1, T3C2, T3C3 });
      await tabla.save();
      console.log(`[DATOCREADO: ${JSON.stringify(tabla)}]`);
      console.groupEnd();
      const data = await thirdTableData.find({ tableTypeId: tableTypeId });
      res.json({
        tableTypeId,
        tabla: data,
      });
    } else {
      console.log(`[NO SE ENCOTRO LA TABLA]`);
      console.groupEnd();
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    console.groupEnd();
    return res.json({
      msg: "Ocurrio un error",
    });
  }
};

const deleteData = async (req, res) => {
  console.group();
  console.log(`[EMPEZANDO:{deleteData}]`);
  const { id } = req.params;
  try {
    const isExistTable1 = await fisrtsTableData.findById({ _id: id });
    const isExistTable2 = await secondTableData.findById({ _id: id });
    const isExistTable3 = await thirdTableData.findById({ _id: id });
    if (isExistTable1) {
      const { tableTypeId } = isExistTable1;
      const deleteData = await fisrtsTableData.findByIdAndDelete({ _id: id });
      const tabla = await fisrtsTableData.find({ tableTypeId: tableTypeId });
      console.log(`[DATAELIMINADA: ${JSON.stringify(tabla)}]`);
      console.groupEnd();
      res.json({
        tabla,
      });
    } else if (isExistTable2) {
      const { tableTypeId } = isExistTable2;
      const deleteData = await secondTableData.findByIdAndDelete({ _id: id });
      const tabla = await secondTableData.find({ tableTypeId: tableTypeId });
      console.log(`[DATAELIMINADA: ${JSON.stringify(tabla)}]`);
      console.groupEnd();
      res.json({
        tabla,
      });
    } else if (isExistTable3) {
      const { tableTypeId } = isExistTable3;
      const deleteData = await thirdTableData.findByIdAndDelete({ _id: id });
      const tabla = await thirdTableData.find({ tableTypeId: tableTypeId });
      console.log(`[DATAELIMINADA: ${JSON.stringify(tabla)}]`);
      console.groupEnd();
      res.json({
        tabla,
      });
    } else {
      console.log(`[NO SE ENCOTRO LA TABLA]`);
      console.groupEnd();
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    console.groupEnd();
    return res.json({
      msg: "Ocurrio un error",
    });
  }
  res.json({
    id,
  });
};

const getData = async (req, res) => {
  console.group();
  console.log(`[EMPEZANDO:{getData}]`);
  const { idTabla } = req.query;
  try {
    const isExist = await TableType.findById(idTabla);
    const { name } = isExist;
    if (name == "Tabla 1") {
      const data = await fisrtsTableData.find({ tableTypeId: idTabla });
      console.log(`[DATAOBTENIDA: ${JSON.stringify(data)}]`);
      console.groupEnd();
      res.json({
        data,
      });
    } else if (name == "Tabla 2") {
      const data = await secondTableData.find({ tableTypeId: idTabla });
      console.log(`[DATAOBTENIDA: ${JSON.stringify(data)}]`);
      console.groupEnd();
      res.json({
        data,
      });
    } else if (name == "Tabla 3") {
      const data = await thirdTableData.find({ tableTypeId: idTabla });
      console.log(`[DATAOBTENIDA: ${JSON.stringify(data)}]`);
      console.groupEnd();
      res.json({
        data,
      });
    } else {
      console.log(`[NO SE ENCOTRO LA TABLA]`);
      console.groupEnd();
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    console.groupEnd();
    return res.json({
      msg: "Ocurrio un error",
    });
  }
};

const updateData = async (req, res) => {
  console.group();
  console.log(`[EMPEZANDO:{updateData}]`);
  const { id } = req.params;
  const { tableTypeId, ...resto } = req.body;
  try {
    const isExist = await TableType.findById(tableTypeId);
    const { name } = isExist;
    if (name == "Tabla 1") {
      const updateFirst = await fisrtsTableData.findByIdAndUpdate(id, resto);
      const tabla = await fisrtsTableData.find({ tableTypeId: tableTypeId });
      console.log(`[DATAACTULIZADA: ${JSON.stringify(updateFirst)}]`);
      console.groupEnd();
      res.json({
        tabla,
      });
    } else if (name == "Tabla 2") {
      const updateSecond = await secondTableData.findByIdAndUpdate(id, resto);
      const tabla = await secondTableData.find({ tableTypeId: tableTypeId });
      console.log(`[DATAACTULIZADA: ${JSON.stringify(updateSecond)}]`);
      console.groupEnd();
      res.json({
        tabla,
      });
    } else if (name == "Tabla 3") {
      const updateThird = await thirdTableData.findByIdAndUpdate(id, resto);
      const tabla = await thirdTableData.find({ tableTypeId: tableTypeId });
      console.log(`[DATAACTULIZADA: ${JSON.stringify(updateThird)}]`);
      console.groupEnd();
      res.json({
        tabla,
      });
    } else {
      console.log(`[NO SE ENCOTRO LA TABLA]`);
      console.groupEnd();
      return res.json({
        msg: "No existe la tabla",
      });
    }
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    console.groupEnd();
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
