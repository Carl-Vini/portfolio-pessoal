import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import About from "../About";
import Home from "../Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
        </BrowserRouter>
    )
}


export default Routes;