import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ImageGridList from "./ImageGridList";

function App() {
  return (
    <div>
      <CssBaseline />
      <ImageGridList />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
