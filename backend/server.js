import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

const app = express();
dotenv.config();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `SERVER is  Running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT} `
  )
);
