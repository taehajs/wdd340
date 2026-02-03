async function getInventoryByClassificationId(classificationId) {
  const sql = "SELECT * FROM inventory WHERE classification_id = $1";
  const data = await pool.query(sql, [classificationId]);
  return data.rows;

}

module.exports = { getInventoryByClassificationId };