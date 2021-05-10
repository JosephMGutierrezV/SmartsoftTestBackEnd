// TODO: no olvidar borrar estos imports de desarrollo
const { response } = require("express");

const columnsGet = (req, res = response) => {
  res.json({
    msg: "get",
  });
};

module.exports = {
  columnsGet,
};
