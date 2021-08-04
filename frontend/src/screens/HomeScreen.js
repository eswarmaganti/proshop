import React, { useEffect } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Product from "../components/Product";

import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

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

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

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

      {loading ? (
        <Loader />
      ) : error ? (
        <Message value={error} severity="error" />
      ) : (
        <Grid container spacing={3} className={classes.grid}>
          {products.map((product, index) => {
            return (
              <Grid item sm={12} md={6} lg={3} key={index}>
                <Product product={product} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
