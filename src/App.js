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
        // console.log(this.props.data);
    }

    render() {
        return (
            <div className="App">
                <Router >
                    <div>
                        <Nav users={this.props.users} />
                        <div className="col-md-12">
                            <Route exact path="/" render={() => (<Redirect to="/feed" />)} />
                            <Route path="/feed" render={() => (<Feed fetchData={this.props.fetchData} users={this.props.users} posts={this.props.posts}/>)} />
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
    users: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.data.items.users,
    posts: state.data.items.posts
})

export default connect(mapStateToProps, { fetchData })(App)
