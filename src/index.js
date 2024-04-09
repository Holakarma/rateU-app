import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./style/style.css";

console.log("0.0.1-alpha.1.0.0");

BX24.init(function () {
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    );
});

