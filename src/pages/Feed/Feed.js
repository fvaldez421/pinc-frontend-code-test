import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PostContainer from "./../../components/PostContainer";
import "./Feed.css";

const PostPollPills = () => {
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
            updated: false,
            user: {},
            posts: []
        };
        this.props.fetchData();
    }

    componentDidUpdate() {
        let user = this.props.users[3];
        let posts = this.props.posts;
        if (this.state.user !== user) {
            this.setState({ user, posts });
            setTimeout(() => {
                this.setState({ updated: true })
            }, 50);
        }
    }
    render() {
        return (
            <div className="">
                <div className="col-md-6 mr-auto ml-auto">
                    <div className="row">
                        <div className="btn newPost" onClick={() => console.log("New Post")}>
                            {this.state.updated ?
                                (<img src={this.state.user.attributes.avatar_thumb} alt="avatar" className="icon"></img>)
                                :
                                (<button className="icon"></button>)
                            }
                            <span className="startInner">Start a conversation</span>
                        </div>
                    </div>

                    <div className="row">
                        <PostPollPills />
                    </div>

                    <div className="row mb-4">
                        <p className="mb-3">Post of the day</p>
                        <div className="dayContainer">
                            {
                                this.state.updated ?
                                    (
                                        <div className="dayPost">
                                            <PostContainer post={this.state.posts[16]} user={this.state.user} />
                                        </div>
                                    )
                                    :
                                    (<div></div>)
                            }
                        </div>
                    </div>

                    <div className="row">
                        <p className="mb-3">Top posts </p>
                        <div className="topContainer mb-5">
                            {
                                this.state.updated ?
                                    (
                                        this.state.posts.map((post, i) => {
                                            return (
                                                <div key={i} className="topPosts mb-3">
                                                    <PostContainer post={post} user={this.state.user} />
                                                </div>
                                            )
                                        })
                                    )
                                    :
                                    (<div></div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed;