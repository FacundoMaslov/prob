import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./config/routes";
import "./App.css"

function App() {

    return (
      <div className="div_p">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
      </div>

    )

  }

function RouteWithSubRoutes(route){
  return(
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />

  )
}

export default App;
