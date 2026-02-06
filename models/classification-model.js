const pool = require("../database/index")

async function getClassifications() {
  try {
    const sql = "SELECT * FROM classification ORDER BY classification_name"
    const data = await pool.query(sql)
    return data.rows
  } catch (error) {
    throw error
  }
}

async function getInventoryByClassificationId(classificationId) {
  try {
    const sql = "SELECT * FROM inventory WHERE classification_id = $1"
    const data = await pool.query(sql, [classificationId])
    return data.rows
  } catch (error) {
    throw error
  }
}

module.exports = { getClassifications, getInventoryByClassificationId }