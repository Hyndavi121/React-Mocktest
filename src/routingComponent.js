import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import loginPage from "./components/dashboard/loginPage/loginPage";
import employeeDetails from "./components/dashboard/employeeDetails/employeeDetails";

class RouterComponent extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={loginPage} />
          <Route exact path="/employeeDetails" component={employeeDetails} />
        </Router>
      </div>
    );
  }
}
export default RouterComponent;
