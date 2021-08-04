import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { ArrowBackIosRounded, ShoppingCartRounded } from "@material-ui/icons";

import { loadProductDetails } from "../actions/productActions";

const useStyles = makeStyles((theme) => {
  return {
    productImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    productPage: {
      padding: "15px 0",
    },
    button: {
      marginBottom: 15,
    },
    listItem: {
      padding: "0 5px",
    },
  };
});

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductDetails(match.params.id));
  }, [dispatch, match]);

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return (
    <Box className={classes.productPage}>
      <Button
        variant="outlined"
        onClick={() => history.push("/")}
        className={classes.button}
        color="primary"
        startIcon={<ArrowBackIosRounded />}
      >
        Back
      </Button>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error" value={error} />
      ) : (
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <img
              src={product.image}
              alt="product"
              className={classes.productImg}
            />
          </Grid>
          <Grid item lg={3}>
            <List>
              <ListItem className={classes.listItem}>
                <Typography variant="h6">{product.name}</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography variant="body2">{product.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3}>
            <List>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell>{product.price}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </TableCell>
                  </TableRow>
                  {product.countInStock > 0 && (
                    <TableRow>
                      <TableCell>Quantity</TableCell>
                      <TableCell>
                        <Select
                          variant="outlined"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <MenuItem value={x + 1} key={x}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    </TableRow>
                  )}

                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      <Button
                        onClick={addToCartHandler}
                        variant="contained"
                        color="primary"
                        endIcon={<ShoppingCartRounded />}
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </List>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductScreen;
