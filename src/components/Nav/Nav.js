import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            page: "feed"
        }
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        let locArr = window.location.pathname.split("/");
        let basePage = locArr[1];
        // console.log(locArr, basePage);
        return (
            <div className="topnav">
                <div className="col-md-9 mr-auto ml-auto">
                    <div className="search">
                        <span className="material-icons full">search</span>
                    </div>

                    <Link to="/feed" className="link">
                        <div className={
                            basePage === "feed" ?
                                "active tab"
                                :
                                "tab"
                        } >
                            <span className="material-icons eq">home</span>
                            <span> Feed</span>
                        </div>
                    </Link>

                    <Link to="/groups" className="link">
                        <div className={
                            basePage === "groups" ?
                                "active tab"
                                :
                                "tab"
                        } >
                            <span className="material-icons eq">explore</span>
                            <span> Groups</span>
                        </div>
                    </Link>

                    <Link to="/activity" className="link">
                        <div className={
                            window.location.pathname === "/activity" || "" ?
                                "active tab"
                                :
                                "tab"
                        } >
                            <span className="material-icons eq">notifications</span>
                            <span> Activity</span>
                        </div>
                    </Link>

                    <button className="btn addPost round">Add Post</button>
                    <button className="img round"></button>
                    <input className="round searchBar"
                        name="search"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={this.onChange}
                    />

                </div>
            </div >
        )
    }
}

export default Nav;