import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SortLabel from "../SortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TablePaginationActions from "@material-ui/core/TablePaginationActions";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(12)
  },
  toolbar: {},
  caption: {
    flexShrink: 0
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: "capitalize"
  }
});

const sortFields = [
  {
    key: "id",
    text: "id"
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
  const { classes, orderBy = "id", order = "", onChangeSortParams } = props;

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography color="inherit" className={classes.caption}>
          Sort by:{" "}
        </Typography>
        {R.map((field, index) => {
          const nextOrder = field.key === orderBy ? orders[order] : "asc";
          const color = field.key === orderBy ? "primary" : "";
          const hasDirectionIcon = orderBy === field.key;

          return (
            <Button className={classes.button} color={color} size="small">
              {hasDirectionIcon && (
                <React.Fragment>
                  {field.text}
                  <SortLabel
                    id={index}
                    active={orderBy === field.key}
                    direction={order}
                    onClick={() => onChangeSortParams(field.key, nextOrder)}
                  />
                </React.Fragment>
              )}
              {!hasDirectionIcon && field.text}
            </Button>
          );
        })(sortFields)}
      </Toolbar>
    </div>
  );
}

ListHeader.propTypes = {
  classes: PropTypes.object.Required,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onChangeSortParams: PropTypes.func
};

ListHeader.defaultProps = {
  ActionsComponent: TablePaginationActions
};

export default withStyles(styles)(ListHeader);
