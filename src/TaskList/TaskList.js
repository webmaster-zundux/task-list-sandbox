import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "../RecipeReviewCard";

const styles = theme => ({
  item: {
    width: "100%"
  }
});

function TaskList(props) {
  const { classes, tasks = [], editable = true } = props;

  return (
    <React.Fragment>
      {tasks.map((task, id) => (
        <Grid key={id} item className={classes.item}>
          <RecipeReviewCard task={task} editable={editable} />
        </Grid>
      ))}
    </React.Fragment>
  );
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array
};

export default withStyles(styles)(TaskList);
