const express = require("express");
const router = express.Router();

module.exports = router;
//Getting all
router.get("/", (req, res) => {
  res.send("<h2>Hello world on router</h2>");
});
//Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
//Creating One
router.post("/", (req, res) => {
  //
});
// Updating One
router.patch("/:id", (req, res) => {
  //
});
//Deleting One
router.delete("/:id", (req, res) => {
  //
});
