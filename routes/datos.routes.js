const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    msg: "get",
  });
});
router.put("/", (req, res) => {
  res.json({
    msg: "put",
  });
});
router.post("/", (req, res) => {
  res.json({
    msg: "post",
  });
});
router.delete("/", (req, res) => {
  res.json({
    msg: "post",
  });
});

module.exports = router;
