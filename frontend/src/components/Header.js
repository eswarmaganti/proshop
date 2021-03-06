import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Box,
  Container,
} from "@material-ui/core";
import { ShoppingCart, Person, HomeRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      fontSize: 20,
      fontWeight: "medium",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 0,
    },
    appbar: {
      position: "sticky",
    },
    button: {
      margin: "0 10px",
    },
  };
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar className={classes.appbar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            My E-Shop
          </Typography>
          <Box>
            <Button
              color="inherit"
              className={classes.button}
              onClick={() => history.push("/")}
              endIcon={<HomeRounded />}
            >
              Home
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              endIcon={<ShoppingCart />}
              onClick={() => history.push("/cart")}
            >
              Cart
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              onClick={() => history.push("/login")}
              endIcon={<Person />}
            >
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
