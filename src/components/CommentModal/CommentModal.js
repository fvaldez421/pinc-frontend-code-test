import React, { Component } from 'react'
import "./CommentModal.css"

import Overlay from "./../Overlay";

class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            post: this.props.post
        }
        this.listenKeyboard = this.listenKeyboard.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.onDialogClick = this.onDialogClick.bind(this);
        // console.log(this.props)
    }

    listenKeyboard(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.props.closeModal();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
    }

    onOverlayClick() {
        this.props.closeModal();
    }

    onDialogClick(e) {
        e.stopPropagation();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.sendComment(this.state);
        setTimeout(() => {
            this.props.closeModal();
        }, 300);
    }
    render() {
        return (
            <Overlay onOverlayClick={this.onOverlayClick}>
                <div className="col-md-6 mr-auto ml-auto" onClick={(e) => this.onDialogClick(e)}>
                    <div className="row postModal">
                        <div className="col-md-12 head">
                            <div className="iconCont">
                                {
                                    this.props.user ?
                                        (<img src={this.props.user.attributes.avatar_thumb} alt="icon" className="iconSmall ml-0 FL"></img>)
                                        :
                                        (<button className="iconSmall ml-0 FL"></button>)
                                }
                            </div>
                            <p className="postModDetail FL mt-2 mb-1">{this.props.user.attributes.name}</p>
                            <span className="btn closeBtn FR" onClick={() => this.props.closeModal()}>X</span>
                            <input
                                className="postInput ml-auto mr-auto FL"
                                name="text"
                                placeholder={`Reply to "${this.props.post.attributes.text}"`}
                                value={this.state.text}
                                onChange={this.handleInputChange}
                            />
                            <div className="lowerCont FR">
                                <button className="btn FR postSubmit" name="submit" onClick={(e) => this.handleFormSubmit(e)}>Comment</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Overlay>
        )
    }
}

export default PostModal;