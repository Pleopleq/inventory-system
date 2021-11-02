import { nanoid } from "nanoid";
import express, { Application } from "express";
const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./views" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
