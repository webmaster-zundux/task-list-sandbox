import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";

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
  const { orderBy = "id", order = "", onChangeSortParams } = props;

  return (
    <div>
      <Typography component="span">Sort by: </Typography>
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
    </div>
  );
}

ListHeader.propTypes = {
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onChangeSortParams: PropTypes.func
};

export default ListHeader;
