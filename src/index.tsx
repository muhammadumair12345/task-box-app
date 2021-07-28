import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { TaskBoxAppPurple } from "./components/TaskBoxApp/TaskBoxApp.stories";

ReactDOM.render(
  <React.StrictMode>
    <TaskBoxAppPurple />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

reportWebVitals();
