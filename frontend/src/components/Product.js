import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

import Rating from "./Rating";

import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    media: {
      height: 200,
    },
    card: {
      backgroundColor: grey[200],
    },
    productName: {
      fontSize: 18,
      fontWeight: "medium",
    },
    link: {
      textDecoration: "none",
      "&:active": {
        textDecoration: "none",
      },
      "&:focus": {
        textDecoration: "none",
      },
      "&:hover": {
        textDecoration: "underline",
      },
      color: "inherit",
    },
    imageLink: {
      textDecoration: "none",
    },
  };
});

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Link to={`product/${product._id}`} className={classes.imageLink}>
      <Card variant="outlined" elevation={0} className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={product.image} />
          <CardContent>
            <Link to={`product/${product._id}`} className={classes.link}>
              <Typography
                gutterBottom
                component="h4"
                className={classes.productName}
              >
                {product.name}
              </Typography>
            </Link>

            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <Typography variant="h6">${product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Product;
