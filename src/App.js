import React from "react";
import ProductInfo from "./Component/ProductInfo"
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Component/Components/Registeration";
import LineChart from "./Component/Dashboard/LineChart";

function App() {
  return (
    <Router>
        <div>
              <li>
                <Link to={"/Component/ProductInfo"} >
                  Products
                </Link>
              </li>
              <li>
                <Link to={"/Component/Registeration"} >
                  Registeration
                </Link>
              </li>
              <li>
                <Link to={"/Component/Dashboard/LineChart"}>
                  Line Chart
                </Link>
              </li>
          <Switch>
            <Route path="/Component/ProductInfo" component={ProductInfo} />
            <Route path="/Component/Dashboard/LineChart" component={LineChart} />
            <Route path="/Component/Registeration" component={Register} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
