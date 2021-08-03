import {
  Box,
  Button,
  Grid,
  Typography,
  Image,
  makeStyles,
  Container,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Rating from "../components/Rating";
import { ArrowBackIosRounded, ShoppingCartRounded } from "@material-ui/icons";
import axios from "axios";

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
  const history = useHistory();
  const classes = useStyles();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/${match.params.id}`);
      setProduct(data);
      console.log(data);
    };
    fetchProduct();
  }, [match]);

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

      <Grid container>
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
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    <Button
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
    </Box>
  );
};

export default ProductScreen;
