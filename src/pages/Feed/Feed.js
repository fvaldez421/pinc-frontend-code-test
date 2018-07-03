import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PostContainer from "./../../components/PostContainer";
import "./Feed.css";

const PostPoll = () => {
    let locArr = window.location.pathname.split("/");
    let lastPg = locArr[locArr.length - 1];
    return (
        <div className="ppPills">
            <Link to={window.location.pathname + "/posts"} className="postPoll">
                <div className={
                    lastPg === "posts" || lastPg === "feed" ?
                        "active "
                        :
                        ""
                } >
                    <span>Posts</span>
                </div>
            </Link>

            <Link to={window.location.pathname + `/polls`} className="postPoll">
                <div className={
                    lastPg === "polls" ?
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
                    <div className="row">
                        <div className="btn newPost" onClick={() => console.log("New Post")}>
                            <button className="icon"></button>
                            <span className="startInner">Start a conversation</span>
                        </div>
                    </div>

                    <div className="row">
                        <PostPoll />
                    </div>

                    <div className="row mb-3">
                        <p className="mb-2">Post of the day</p>

                        <div className="dayPost">
                            <PostContainer />
                        </div>
                    </div>

                    <div className="row">
                        <p className="mb-2">Top posts </p>

                        <div className="topPosts">
                            (Post container in mapped posts)
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed