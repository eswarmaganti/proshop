import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import products from "../data/products.js";
const router = express.Router();

router
  //@desc     Fetch all Products
  //@route    GET /api/products
  //@access   public
  .get(
    "/",
    asyncHandler(async (req, res) => {
      const products = await Product.find({});

      res.json(products);
    })
  )
  //@desc     Fetch a single Product
  //@route    GET /api/products/:id
  //@access   public
  .get(
    "/:id",
    asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Product Not Found with given Id");
      }
    })
  );

export default router;
