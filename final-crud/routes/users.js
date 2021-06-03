const express = require("express");
const router = express.Router();
const dbConnection = require("../lib/db");
/* GET users listing. */
router.get("/", function (req, res, next) {
  dbConnection.query("SELECT * FROM heroes_tb ORDER BY id", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      res.send("index", { data: data });
    }
  });
});

module.exports = router;
