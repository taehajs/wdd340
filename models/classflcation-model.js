const pool = require("../database/"); 

async function getClassifications() {
  const sql = "SELECT * FROM classification ORDER BY classification_name";
  const data = await pool.query(sql);
  return data.rows;
}

module.exports = { getClassifications };