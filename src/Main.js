import React, { Component } from "react";
import {
    Route,
    // NavLink, 
    HashRouter
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div className="content">
                <Route exact path="/" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/contact" component={Contact}/>
            </div>
            {/* </div> */}

        </HashRouter>
    );
  }
}
 
export default Main;