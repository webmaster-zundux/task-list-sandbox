import React from "react";
import classNames from "class-names";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class TaskForm extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, onSubmit, isNew = true } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <TextField
          hintText="Task description"
          autoFocus
          multiline={true}
          rows={1}
          fullWidth
        />

        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          multiple
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            className={classes.button}
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>

        <Button
          type="submit"
          variant="contained"
          size="small"
          className={classes.button}
        >
          <SaveIcon
            className={classNames(classes.leftIcon, classes.iconSmall)}
          />
          {isNew ? "Create" : "Save"}
        </Button>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isNew: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(TaskForm);
