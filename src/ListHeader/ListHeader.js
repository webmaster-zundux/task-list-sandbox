import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TablePaginationActions from "@material-ui/core/TablePaginationActions";

const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(12)
  },
  toolbar: {
    height: 56,
    minHeight: 56,
    paddingRight: 2
  },
  // actions: {
  //   float: "left",
  //   paddingRight: 15
  // }
  caption: {
    flexShrink: 0
  }
});

const sortFields = [
  {
    key: "id",
    text: "default"
  },
  {
    key: "username",
    text: "username"
  },
  {
    key: "email",
    text: "email"
  }
];

const orders = {
  "": "asc",
  asc: "desc",
  desc: ""
};

function ListHeader(props) {
  const {
    ActionsComponent,
    classes,
    orderBy = "id",
    order = "",
    onChangeSortParams
  } = props;

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography
          color="inherit"
          variant="caption"
          className={classes.caption}
        >
          Sort by:{" "}
        </Typography>
        {R.map((field, index) => {
          const nextOrder = field.key === orderBy ? orders[order] : "asc";

          return (
            <TableSortLabel
              id={index}
              active={orderBy === field.key}
              direction={order}
              onClick={() => onChangeSortParams(field.key, nextOrder)}
            >
              {field.text}
            </TableSortLabel>
          );
        })(sortFields)}
        <div
          className={classes.actions}
          // backIconButtonProps={backIconButtonProps}
          // count={count}
          // nextIconButtonProps={nextIconButtonProps}
          // onChangePage={onChangePage}
          // page={page}
          // rowsPerPage={rowsPerPage}
        >
          <IconButton
            onClick={this.handleBackButtonClick}
            disabled={page === 0}
            {...backIconButtonProps}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton
            onClick={this.handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            {...nextIconButtonProps}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        </div>
      </Toolbar>
    </div>
  );
}

ListHeader.propTypes = {
  ActionsComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  classes: PropTypes.object.Required,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onChangeSortParams: PropTypes.func
};

ListHeader.defaultProps = {
  ActionsComponent: TablePaginationActions
};

export default withStyles(styles)(ListHeader);
