const { Router } = require("express");
const { columnsGet } = require("../controllers/columns.controller");

const router = Router();

router.get("/", columnsGet);

module.exports = router;
