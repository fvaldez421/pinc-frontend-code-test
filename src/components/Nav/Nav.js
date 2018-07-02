import React from 'react';
// import { Link } from "react-router-dom";
import "./Nav.css";


const Nav = (props) => {
    return (
        <div className="topnav">
            <div className="col-md-10 mr-auto ml-auto">
                <div className="search">
                    <span className="material-icons full">search</span>
                </div>
                <div href="feed" className="tab active">
                    <span className="material-icons eq">home</span>
                    <span> Feed</span>
                </div>
                <div href="groups" className="tab">
                    <span className="material-icons eq">explore</span>
                    <span> Groups</span>
                </div>
                <div href="activity" className="tab">
                    <span className="material-icons eq">notifications</span>
                    <span> Activity</span>
                </div>
                <button className="btn addPost round">Add Post</button>
                <button className="img round"></button>
                <input className="round searchBar" value="Search" />

            </div>
        </div >
    )
}

export default Nav;