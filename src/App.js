import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import Nav from "./components/Nav";
import Feed from "./pages/Feed";

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <Router >
                    <div>
                        <Nav icon={""}/>
                        <div className="col-md-12">
                        <Route exact path="/" render={() => (<Redirect to="/feed" />)} />
                        <Route path="/feed" component={Feed} />
                        {/* <Route path="/groups" component={Groups} />
                        <Route path="/activity" component={Activity} /> */}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
