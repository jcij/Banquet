import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, CircularProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    // position: 'absolute',
  },
}));

const CustomLoader = ({ size, position }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ position: position || "relative" }}
      >
        <CircularProgress
          size={size || 20}
          className="text-primary"
          aria-label="data loading"
          title="loading"
        />
      </Grid>
    </>
  );
};

export default CustomLoader;
