import { nanoid } from "nanoid";
import express from "express";
import pool from "./db/db";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const allItem = await pool.query("SELECT * FROM item");
  res.json(allItem);
});

app.post("/item", async (req, res) => {
  try {
    const { item } = req.body;
    const newItem = await pool.query(
      "INSERT INTO item (title) VALUES ($1) RETURNING *",
      [item]
    );
    res.json(newItem.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, async () => {
  console.log("Server listening on port 5000");
});
