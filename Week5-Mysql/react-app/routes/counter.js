// routes/counter.js
import express from "express";
import pool from "../database.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { male_count, female_count, total } = req.body;
    const sql =
      "INSERT INTO counter_db (male_count, female_count, total) VALUES (?, ?, ?)";
    const [result] = await pool.query(sql, [male_count, female_count, total]);
    res.json({ message: "Data saved successfully", id: result.insertId });
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/history", async (req, res) => {
  try {
    const sql = "SELECT * FROM counter_db ORDER BY id DESC";
    const [results] = await pool.query(sql);
    res.json(results);
  } catch (err) {
    console.error("❌ Error fetching history:", err);
    res.status(500).json({ error: "Database error" });
  }
});

router.delete("/history", async (req, res) => {
  try {
    const sql = "DELETE FROM counter_db";
    await pool.query(sql);
    res.json({ message: "✅ History cleared" });
  } catch (err) {
    console.error("❌ Error deleting history:", err);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
