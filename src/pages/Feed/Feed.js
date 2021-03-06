import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { renderModal } from "./../../actions/modalActions";
import { sendReaction } from "./../../actions/dataActions";
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

const Feed = (props) => {
    // props.fetchData();
    // console.log(props);
        return (
            <div className="">
                <div className="col-md-6 mr-auto ml-auto">
                    <div className="row">
                        <div className="btn newPost" onClick={() => props.renderModal("NewPost", props.user)}>
                            {props.user ?
                                (<img src={props.user.attributes.avatar_thumb} alt="avatar" className="icon mr-2"></img>)
                                :
                                (<button className="icon mr-2"></button>)
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
                                props.posts[0] ?
                                    (
                                        <div className="dayPost">
                                            <PostContainer post={props.posts[16]} {...props} />
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
                                props.posts ?
                                    (
                                        props.posts.map((post, i) => {
                                            return (
                                                <div key={i} className="topPosts mb-3">
                                                    <PostContainer post={post} {...props} />
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


Feed.propTypes = {
    renderModal: PropTypes.func.isRequired,
    sendReaction: PropTypes.func.isRequired,
    modalStatus: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    modalStatus: state.modal.modalStatus
})

const mapDispatchToProps = {
    renderModal,
    sendReaction
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
// export default Feed;
