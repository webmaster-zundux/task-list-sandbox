import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class FormDialog extends React.Component {
  render() {
    const {
      isOpenCreateTaskDialog = false,
      onOk,
      onClose,
      children
    } = this.props;

    return (
      <div>
        <Dialog
          open={isOpenCreateTaskDialog}
          onClose={onClose}
          aria-labelledby="create-task-form-dialog"
        >
          <DialogTitle id="create-task-form-dialog">Title</DialogTitle>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={onOk} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.any
};

export default FormDialog;
