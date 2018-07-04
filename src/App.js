import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "./actions/dataActions";
import './App.css';

import Nav from "./components/Nav";
import Feed from "./pages/Feed";

class App extends Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
    }

    componentDidUpdate() {
        console.log(this.props.data);
    }

    render() {
        return (
            <div className="App">
                <Router >
                    <div>
                        <Nav users={this.props.included} />
                        <div className="col-md-12">
                            <Route exact path="/" render={() => (<Redirect to="/feed" />)} />
                            <Route path="/feed" render={() => (<Feed {...this.props}/>)} />
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
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data.items
})

export default connect(mapStateToProps, { fetchData })(App)
