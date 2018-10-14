import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const sortFields = {
  id: "default",
  username: "username",
  email: "email"
};

const orders = {
  "": "asc",
  asc: "desc",
  desc: ""
};

function ListHeader(props) {
  const { orderBy = "id", order = "", onChangeSortParams } = props;

  return (
    <div>
      {R.map((value, key) => {
        const nextOrder = key === orderBy ? orders[order] : "asc";

        return (
          <TableSortLabel
            id={key}
            active={orderBy === key}
            direction={order}
            onClick={() => onChangeSortParams(key, nextOrder)}
          >
            {value}
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
