import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ImageGridList from "./ImageGridList";

import { tasks, editable } from "./db";

function App() {
  return (
    <div>
      <CssBaseline />
      <ImageGridList tasks={tasks} editable={editable} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
