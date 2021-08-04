import React, { useEffect } from "react";
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import { DeleteRounded, RemoveShoppingCart } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../actions/cartActions";
import Message from "../components/Message";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => {
  return {
    cartScreen: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    image: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
      borderRadius: 10,
    },
    gridItem: {
      display: "grid",
      placeItems: "center",
    },
    cartItemRow: {
      backgroundColor: grey[200],
      marginBottom: 5,
      borderRadius: 10,
    },
    productTitle: {
      fontSize: 18,
      fontWeight: "medium",
      lineHeight: 1.1,
      padding: 10,
    },
    padding: {
      paddingLeft: theme.spacing(3),
    },
  };
});

const CartScreen = ({ match, history, location }) => {
  const classes = useStyles();
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  const checkoutHandler = () => {
    console.log("checkout");
  };

  return (
    <Box className={classes.cartScreen}>
      <Typography variant="h5" component="h2" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Message value="your cart is empty!!!" />
      ) : (
        <Grid container>
          <Grid container md={8}>
            {cartItems.map((item) => (
              <Grid container md={12} className={classes.cartItemRow}>
                <Grid item md={2} className={classes.gridItem}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes.image}
                  />
                </Grid>
                <Grid item md={4} className={classes.gridItem}>
                  <Link to={`/products/${item.product}`}>
                    <Typography
                      color="textPrimary"
                      className={classes.productTitle}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={2} className={classes.gridItem}>
                  <Typography align="center"> ${item.price}</Typography>
                </Grid>
                <Grid item md={2} className={classes.gridItem}>
                  <Typography align="center">
                    <Select
                      variant="outlined"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <MenuItem value={x + 1} key={x}>
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </Typography>
                </Grid>
                <Grid item md={2} className={classes.gridItem}>
                  <IconButton
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    <RemoveShoppingCart color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid container md={4} className={classes.padding}>
            <Grid item md={12}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      SUBTOTAL (
                      {cartItems.reduce(
                        (acc, item) => acc + Number(item.qty),
                        0
                      )}{" "}
                      ) ITEMS
                    </TableCell>
                    <TableCell>
                      Total Amount $
                      {cartItems
                        .reduce((acc, item) => acc + item.price * item.qty, 0)
                        .toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Proceed to checkout
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CartScreen;
