import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SortLabel from "../SortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TablePaginationActions from "@material-ui/core/TablePaginationActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(12),
    width: "100%"
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

const ListHeader = props => {
  const { classes, orderBy = "id", order = "", onChangeSortParams } = props;

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Typography color="inherit">Sort by: </Typography>
          </Grid>
          {R.map((field, index) => {
            const nextOrder = field.key === orderBy ? orders[order] : "asc";
            const color = field.key === orderBy ? "primary" : "";
            const hasDirectionIcon = orderBy === field.key;

            return (
              <Grid key={index} item>
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
              </Grid>
            );
          })(sortFields)}
        </Grid>
      </Toolbar>
    </div>
  );
};

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
