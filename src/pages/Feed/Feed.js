import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Feed.css";

const PostPoll = () => {
    let locationArr = window.location.pathname.split("/");
    let lastPg = locationArr.length - 1;
    return (
        <div className="ppPills">
            <Link to={window.location.pathname + "/posts"} className="postPoll">
                <div className={
                    locationArr[lastPg] === "posts" || locationArr[lastPg] === "feed" ?
                        "active "
                        :
                        ""
                } >
                    <span>Posts</span>
                </div>
            </Link>

            <Link to={window.location.pathname + `/polls`} className="postPoll">
                <div className={
                    locationArr[lastPg] === "polls" ?
                        "active "
                        :
                        ""
                } >
                    <span>Polls</span>
                </div>
            </Link>
        </div>
    )
}

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: "",
            showModal: false
        }
    }

    render() {
        return (
            <div className="">
                <div className="col-md-6 mr-auto ml-auto">
                    <Link to={window.location.pathname + `/new`} className="newPost" onClick={() => console.log("New Post")}>
                        <div className="start">
                            <button className="icon"></button>
                            <span className="startInner">Start a conversation</span>
                        </div>
                    </Link>

                    <PostPoll />

                    <div className="dayPost">
                        <p className="ml-0">Post of the day</p>
                        (Post container with one post)
                    </div>
                    <div className="topPosts">
                        <p className="">Top posts </p>
                        (Post container in mapped posts)
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed