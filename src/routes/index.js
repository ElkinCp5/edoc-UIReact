import React from "react";
/* Router */
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Helper } from '../utils';
/* Redux */
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

/* Overwrite */
import routes from "./json/routes";

let { RouteWithSubRoutes } = Helper;


function RouteLink() {
  return (
      <Router>
        <Switch>
          {
            routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))
          }
        </Switch>
      </Router>
  );
}

export default RouteLink;