import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Page from "../Page";
import TaskList from "../TaskList";
import ListHeader from "../ListHeader";
import ListPagination from "../ListPagination";
import AppBar from "../AppBar";
import Dialog from "../Dialog";
import TaskForm from "../TaskForm";

import { tasks } from "../../db";

const tasksTotal = 4;
const editable = true;
const sortByField = "id";
const sortDirection = "asc";
const onChangeSortParams = () => {
  console.log("onChangeSortParams", arguments);
};
const onChangePage = (event, page) => {
  console.log("onChangePage", arguments);
};
const page = 0,
  rowsPerPage = 3,
  count = tasksTotal;

let isOpenCreateTaskDialog = false;
const onAddTask = () => {
  onOpenDialog();
};
const onOpenDialog = () => {
  isOpenCreateTaskDialog = true;
};
const onCloseDialog = () => {
  isOpenCreateTaskDialog = false;
};
const onOk = () => {
  // call form submit
};
const isNew = true;
const editTaskDialogTitle = isNew ? "Create task" : "Edit task";
const onSubmit = () => {
  //send the form data as multipart POST request
};

const App = () => (
  <div>
    <CssBaseline />
    <Page>
      <AppBar
        {...{
          onAddTask
        }}
      />
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
      <Dialog
        {...{
          isOpenCreateTaskDialog,
          onCloseDialog,
          onOk,
          title: editTaskDialogTitle
        }}
      >
        <TaskForm
          {...{
            onSubmit
          }}
        />
      </Dialog>
    </Page>
  </div>
);

export default App;
