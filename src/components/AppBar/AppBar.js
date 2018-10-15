import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function ButtonAppBar(props) {
  const { classes, onAddTask } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Task tracker
          </Typography>
          <Button
            color="inherit"
            size="small"
            aria-label="Add task"
            onClick={onAddTask}
          >
            <AddIcon className={classes.extendedIcon} />
            Add task
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddTask: PropTypes.func.isRequired
};

export default withStyles(styles)(ButtonAppBar);
