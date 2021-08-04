import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDb from "./config/db.js";
import colors from "colors";
import productRouter from "./routes/productRoutes.js";
import { errroHanlder, notFound } from "./middleware/errorMiddlewareHandler.js";

const app = express();
dotenv.config();

//connecting to MongoDB
connectDb();

// pointing to products routes
app.use("/api/products", productRouter);

//middleware for handling 404 requests
app.use(notFound);

// middleware for error handling

app.use(errroHanlder);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `SERVER is  Running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT} `
      .yellow.bold
  )
);
