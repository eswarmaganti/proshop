import React from "react";
import { CircularProgress, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.flex}>
      <CircularProgress></CircularProgress>
    </Box>
  );
};

export default Loader;
