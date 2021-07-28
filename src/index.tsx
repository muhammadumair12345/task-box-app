import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import TaskBoxApp from "./components/TaskBoxApp/TaskBoxApp";

ReactDOM.render(
  <React.StrictMode>
    <TaskBoxApp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

reportWebVitals();
