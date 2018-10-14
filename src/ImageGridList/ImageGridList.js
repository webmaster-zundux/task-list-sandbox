import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "../RecipeReviewCard";

import { tasks } from "../db";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#eeeeee"
  },
  list: {
    display: "flex",
    justifyContent: "center"
  },
  item: {
    width: "100%"
  }
});

function ImageGridList(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Grid container className={classes.list} spacing={16}>
          {tasks.map((task, id) => (
            <Grid key={id} item className={classes.item}>
              <RecipeReviewCard task={task} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
