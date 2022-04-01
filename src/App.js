import "./styles.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="navbar-brand">
              V2MOM
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>
        </Router>
        <div className="container mt-3">
          <h1> Here </h1>
          {/* <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch> */}
        </div>
      </div>
    );
  }
}
export default App;
