import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ImageGridList from "./ImageGridList";
import ListHeader from "./ListHeader";
import Pagination from "./Pagination";

import { tasks } from "./db";
const editable = true;
const sortByField = "id";
const sortDirection = "asc";
const onChangeSortParams = () => {
  console.log(arguments);
};

function App() {
  return (
    <div>
      <CssBaseline />
      <ListHeader
        {...{
          sortByField,
          sortDirection,
          onChangeSortParams
        }}
      />
      <ImageGridList tasks={tasks} editable={editable} />
      <Pagination />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
