import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import {
  StarBorderRounded,
  StarHalfRounded,
  StarRounded,
} from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
  return {
    rating: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      lineHeight: 2,
      marginLeft: 10,
    },
    starIcon: {
      color: yellow[700],
    },
  };
});

const Rating = ({ value, text, color }) => {
  const classes = useStyles();
  return (
    <Box className={classes.rating}>
      <Typography>
        {value >= 1 ? (
          <StarRounded className={classes.starIcon} />
        ) : value >= 0.5 ? (
          <StarHalfRounded className={classes.starIcon} />
        ) : (
          <StarBorderRounded className={classes.starIcon} />
        )}
        {value >= 2 ? (
          <StarRounded className={classes.starIcon} />
        ) : value >= 1.5 ? (
          <StarHalfRounded className={classes.starIcon} />
        ) : (
          <StarBorderRounded className={classes.starIcon} />
        )}
        {value >= 3 ? (
          <StarRounded className={classes.starIcon} />
        ) : value >= 2.5 ? (
          <StarHalfRounded className={classes.starIcon} />
        ) : (
          <StarBorderRounded className={classes.starIcon} />
        )}
        {value >= 4 ? (
          <StarRounded className={classes.starIcon} />
        ) : value >= 3.5 ? (
          <StarHalfRounded className={classes.starIcon} />
        ) : (
          <StarBorderRounded className={classes.starIcon} />
        )}
        {value >= 5 ? (
          <StarRounded className={classes.starIcon} />
        ) : value >= 4.5 ? (
          <StarHalfRounded className={classes.starIcon} />
        ) : (
          <StarBorderRounded className={classes.starIcon} />
        )}
      </Typography>
      <Typography className={classes.text}> {text && text} </Typography>
    </Box>
  );
};

Rating.defaultProps = {
  color: yellow[600],
};
export default Rating;
