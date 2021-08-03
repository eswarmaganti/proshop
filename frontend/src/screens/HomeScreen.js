import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Product from "../components/Product";
import axios from "axios";
const useStyles = makeStyles((theme) => {
  return {
    grid: {
      marginTop: 10,
      marginBottom: 10,
    },
    title: {
      padding: "10px 0",
    },
  };
});

const HomeScreen = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        Latest Products
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        {products.map((product, index) => {
          return (
            <Grid item sm={12} md={6} lg={4} key={index}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default HomeScreen;
