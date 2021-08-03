import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import products from "../products";
import Product from "../components/Product";

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
  console.log(products);
  const classes = useStyles();
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
