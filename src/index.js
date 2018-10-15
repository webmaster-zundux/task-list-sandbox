import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Page from "./Page";
import TaskList from "./TaskList";
import ListHeader from "./ListHeader";
import ListPagination from "./ListPagination";

import { tasks } from "./db";
const tasksTotal = 4;
const editable = true;
const sortByField = "id";
const sortDirection = "asc";
const onChangeSortParams = () => {
  console.log("onChangeSortParams", arguments);
};
const onChangePage = (event, page) => {
  console.log("onChangePage", arguments);
  // this.setState({ page });
};
const page = 0,
  rowsPerPage = 3,
  count = tasksTotal;

function App() {
  return (
    <div>
      <CssBaseline />
      <Page>
        <ListHeader
          {...{
            sortByField,
            sortDirection,
            onChangeSortParams
          }}
        />
        <TaskList tasks={tasks} editable={editable} />
        <ListPagination
          {...{
            page,
            rowsPerPage,
            count,
            onChangePage
          }}
        />
      </Page>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
