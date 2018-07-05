import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendPost } from "./../../actions/dataActions";
import { closeModal } from "./../../actions/modalActions";

import PostModal from "./../../components/PostModal";

const Modal = (props) => {
    let status = props.modalStatus
    switch (status) {
        case "NewPost":
            // console.log(status);
            return (<PostModal sendPost={props.sendPost} user={props.users[3]} closeModal={props.closeModal} />)
        default:
            // console.log(status);
            return (<div></div>)
        }
}

const ModalController = (props) => {
    // console.log(props);
    // console.log(props.modalStatus);
    let status = props.modalStatus

    return (
        status !== "closed" ?
            (<Modal {...props}/>)
            :
            (<div></div>)

    )
}



ModalController.propTypes = {
    sendPost: PropTypes.func.isRequired,
    modalStatus: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
}

const mapDispatchToProps = {
    sendPost,
    closeModal
}

const mapStateToProps = (state) => ({
    users: state.data.items.users,
    modalStatus: state.modalStatus.modalStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalController)
