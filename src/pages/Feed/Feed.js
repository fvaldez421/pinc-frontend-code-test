import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { renderModal } from "../../actions/modalActions";
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

const Feed = (props) => {
    // props.fetchData();
    // console.log(props);
        return (
            <div className="">
                <div className="col-md-6 mr-auto ml-auto">
                    <div className="row">
                        <div className="btn newPost" onClick={() => props.renderModal("NewPost")}>
                            {props.user ?
                                (<img src={props.user.attributes.avatar_thumb} alt="avatar" className="icon"></img>)
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
                                props.posts[0] ?
                                    (
                                        <div className="dayPost">
                                            <PostContainer post={props.posts[16]} user={props.user} />
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
                                                    <PostContainer post={post} user={props.user} />
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
    modalStatus: PropTypes.string.isRequired
    // users: PropTypes.array.isRequired,
    // posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    modalStatus: state.modalStatus.modalStatus
})

export default connect(mapStateToProps, { renderModal })(Feed)
// export default Feed;
