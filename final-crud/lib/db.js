const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wiki",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("tersambung euyy...");
  }
});

module.exports = connection;
