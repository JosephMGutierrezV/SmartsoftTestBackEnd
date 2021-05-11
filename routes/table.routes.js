const { Router } = require("express");
const {
  columnsGet,
  tableDetailGet,
  createAll,
} = require("../controllers/table.controller");

const router = Router();

router.get("/getTables", columnsGet);

router.get("/getTableDetail", tableDetailGet);

router.post("/createTable", createAll);

module.exports = router;
