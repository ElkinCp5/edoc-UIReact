import React from "react";
import { Route } from "react-router-dom";

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const buttonToHistory = (history, url) => {
  /*this.props.history.push({to: url});*/
  history.push(url);
  console.log( history, url)
}

const parseFormData = params => {
  const formData = new FormData();
  for (var s in params) {
    formData.append(s, params[s]);
  }
  return formData;
}



export default {parseFormData, RouteWithSubRoutes, buttonToHistory};