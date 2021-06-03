const express = require("express");
const router = express.Router();
const dbConnection = require("../lib/db");

/* GET home page. */
router.get("/", function (req, res, next) {
  dbConnection.query(
    `SELECT heroes_tb.id AS heroId heroes_tb.name AS name, heroes_tb.photo AS photo, type_tb.name AS typeId FROM heroes_tb, type_tb WHERE heroes_tb.type_id=type_tb.id`,
    (error, data) => {
      if (error) {
        console.log("kampret");
        console.log(error);
      } else {
        console.log(data);
        res.render("index", { title: "Heroes List", data: data });
      }
    }
  );
});

router.get("/delete/(:id)", (req, res) => {
  const id = req.params.id;

  dbConnection.query("DELETE FROM heroes_tb WHERE id = " + id, (error) => {
    if (error) {
      req.flash("error", error);
    } else {
      req.flash("success", "Data Has Been Deleted");
      res.redirect("/");
    }
  });
});

router.get("/add", (req, res) => {
  dbConnection.query("SELECT * FROM type_tb", (error, data) => {
    const typeId = data;

    if (error) {
      console.log(error);
    } else {
      res.render("hero/add", {
        typeId,
        title: "Add More Heroes",
        name: "",
        photo: "",
      });
    }
  });
});

module.exports = router;
