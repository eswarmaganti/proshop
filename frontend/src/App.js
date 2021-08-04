import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: blue[600],
    },
  },
});

const useStyles = makeStyles((theme) => {
  return {
    mainContainer: {
      minHeight: "80vh",
    },
  };
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="lg" className={classes.mainContainer}>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/products/:id" exact component={ProductScreen} />
            <Route path="/cart/:id?" exact component={CartScreen} />
          </Switch>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
