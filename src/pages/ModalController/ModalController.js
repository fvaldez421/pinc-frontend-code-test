import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendPost, sendComment } from "./../../actions/dataActions";
import { closeModal } from "./../../actions/modalActions";

import PostModal from "./../../components/PostModal";
import CommentModal from "./../../components/CommentModal";

const Modal = (props) => {
    let status = props.modalStatus
    switch (status) {
        case "NewPost":
            // console.log(status);
            return (<PostModal sendPost={props.sendPost} user={props.users[3]} closeModal={props.closeModal} />)
        case "Comment":
            // console.log(status);
            return (<CommentModal sendComment={props.sendComment} user={props.users[3]} post={props.post} closeModal={props.closeModal} />)
        default:
            // console.log(status);
            return (<div></div>)
    }
}

const ModalController = (props) => {
    // console.log(props);
    let status = props.modalStatus

    return (
        status !== "closed" ?
            (<Modal {...props} />)
            :
            (<div></div>)

    )
}

ModalController.propTypes = {
    sendPost: PropTypes.func.isRequired,
    sendComment: PropTypes.func.isRequired,
    modalStatus: PropTypes.string.isRequired,
    post: PropTypes.object,
    users: PropTypes.array.isRequired
}

const mapDispatchToProps = {
    sendPost,
    sendComment,
    closeModal
}

const mapStateToProps = (state) => ({
    users: state.data.items.users,
    modalStatus: state.modal.modalStatus,
    post: state.modal.post
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalController)
