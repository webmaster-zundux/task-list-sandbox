import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TaskCard from "../TaskCard";

const styles = theme => ({
  item: {
    width: "100%"
  }
});

function TaskList(props) {
  const { classes, tasks = [], editable = true } = props;

  return (
    <Grid container className={classes.root} spacing={16}>
      {tasks.map((task, id) => (
        <Grid key={id} item className={classes.item}>
          <TaskCard task={task} editable={editable} />
        </Grid>
      ))}
    </Grid>
  );
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array
};

export default withStyles(styles)(TaskList);
