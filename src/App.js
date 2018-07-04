import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "./actions/dataActions";
import './App.css';

import Nav from "./components/Nav";
import Feed from "./pages/Feed";

class App extends Component {

    componentWillMount() {
        // this.props.fetchData();
    }

    render() {
        return (
            <div className="App">
                <Router >
                    <div>
                        <Nav user={this.props.users[3]} />
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


App.propTypes = {
    fetchData: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.data.items.users
})

export default connect(mapStateToProps, { fetchData })(App)
