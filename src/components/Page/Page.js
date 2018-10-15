import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#eeeeee"
  },
  list: {
    display: "flex",
    justifyContent: "center"
  }
});

function Page(props) {
  const { classes, children } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <Grid container className={classes.list}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

Page.propTypes = {
  classes: PropTypes.object.Required,
  children: PropTypes.any
};

export default withStyles(styles)(Page);
