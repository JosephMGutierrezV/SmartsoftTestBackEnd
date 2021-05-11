const { Router } = require("express");
const {
  createData,
  deleteData,
  getData,
  updateData,
} = require("../controllers/datos.controller");

const router = Router();

router.get("/getTableData", getData);
router.put("/update-item/:id", updateData);
router.post("/create-item", createData);
router.delete("/delete-item/:id", deleteData);

module.exports = router;
