import express from "express";
import app from './app'

app.use(express.json());

app.listen(4040, async () => {
  console.log("Server listening on port 3030");
});
