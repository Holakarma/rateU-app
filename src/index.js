import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/style.css";

console.log("0.0.1-alpha.0.0.1");

BX24.init(function () {
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    );
});

