const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.sqlite");

exports.getAllProducts = (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }
    res.render("products", { products: rows });
  });
};
