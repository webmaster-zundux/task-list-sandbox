import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TablePaginationActions from "@material-ui/core/TablePaginationActions";

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(12)
  },
  /* Styles applied to the Toolbar component. */
  toolbar: {
    height: 56,
    minHeight: 56,
    paddingRight: 2
  },
  /* Styles applied to the spacer element. */
  spacer: {
    flex: "1 1 100%"
  },
  /* Styles applied to the caption Typography components if `variant="caption"`. */
  caption: {
    flexShrink: 0
  },
  /* Styles applied to the Select component `root` class. */
  selectRoot: {
    marginRight: 32,
    marginLeft: 8,
    color: theme.palette.text.secondary
  },
  /* Styles applied to the Select component `select` class. */
  select: {
    paddingLeft: 8,
    paddingRight: 16
  },
  /* Styles applied to the Select component `icon` class. */
  selectIcon: {
    top: 1
  },
  /* Styles applied to the `InputBase` component. */
  input: {
    fontSize: "inherit",
    flexShrink: 0
  },
  /* Styles applied to the MenuItem component. */
  menuItem: {},
  /* Styles applied to the internal `TablePaginationActions` component. */
  actions: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: 20
  }
});

class ListPagination extends React.Component {
  // This logic would be better handled on userside.
  // However, we have it just in case.
  componentDidUpdate() {
    const { count, onChangePage, page, rowsPerPage } = this.props;
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    if (page > newLastPage) {
      onChangePage(null, newLastPage);
    }
  }

  render() {
    const {
      ActionsComponent,
      backIconButtonProps,
      classes,
      count,
      labelDisplayedRows,
      nextIconButtonProps,
      onChangePage,
      page,
      rowsPerPage
    } = this.props;

    return (
      <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography
            color="inherit"
            variant="caption"
            className={classes.caption}
          >
            {labelDisplayedRows({
              from: count === 0 ? 0 : page * rowsPerPage + 1,
              to: Math.min(count, (page + 1) * rowsPerPage),
              count,
              page
            })}
          </Typography>
          <ActionsComponent
            className={classes.actions}
            backIconButtonProps={backIconButtonProps}
            count={count}
            nextIconButtonProps={nextIconButtonProps}
            onChangePage={onChangePage}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Toolbar>
      </div>
    );
  }
}

ListPagination.propTypes = {
  /**
   * The component used for displaying the actions.
   * Either a string to use a DOM element or a component.
   */
  ActionsComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  /**
   * Properties applied to the back arrow [`IconButton`](/api/icon-button/) component.
   */
  backIconButtonProps: PropTypes.object,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The total number of rows.
   */
  count: PropTypes.number.isRequired,
  /**
   * Customize the displayed rows label.
   */
  labelDisplayedRows: PropTypes.func,
  /**
   * Properties applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: PropTypes.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: PropTypes.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: PropTypes.number.isRequired
};

ListPagination.defaultProps = {
  ActionsComponent: TablePaginationActions,
  labelDisplayedRows: ({ from, to, count }) => `${from}-${to} of ${count}`,
  labelRowsPerPage: "Rows per page:",
  rowsPerPageOptions: [5, 10, 25]
};

export default withStyles(styles, { name: "MuiTablePagination" })(
  ListPagination
);
