import React, { Component } from 'react'
import "./PostModal.css"

import Overlay from "./../Overlay";

class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: "",
            text: "",
            anonymous: false,
            user: this.props.user
        }
        this.listenKeyboard = this.listenKeyboard.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.onDialogClick = this.onDialogClick.bind(this);
        this.anonChange = this.anonChange.bind(this);
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

    anonChange() {
        this.setState({ anonymous: !this.state.anonymous})
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.sendPost(this.state);
        setTimeout(() => {
            this.props.closeModal();
        }, 300);
    }
    render() {
        return (
            <Overlay onOverlayClick={this.onOverlayClick}>
                <div className="col-md-6 mr-auto ml-auto" onClick={(e) => this.onDialogClick(e)}>
                    <div className="row postModal">
                        <div className="col-md-12 body">
                            <div className="row mt-2">
                                <div className="col-md-1">
                                    <div className="iconCont">
                                        {
                                            this.props.user ?
                                                (<img src={this.props.user.attributes.avatar_thumb} alt="icon" className="iconSmall ml-0 FL"></img>)
                                                :
                                                (<button className="iconSmall ml-0 FL"></button>)
                                        }
                                    </div>
                                </div>

                                <div className="col-md-11">
                                    <p className="postModDetail FL mt-2 mb-1">{"Name in "}</p>
                                    <p className="btn postModDetail addGroup FL mt-2 ml-1 mb-1">+ Add Group</p>
                                    <span className="btn closeBtn FR" onClick={() => this.props.closeModal()}>X</span>

                                    <input
                                        className="postInput FL"
                                        name="text"
                                        placeholder="What is your question? Make it short and simple."
                                        value={this.state.text}
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="row lowerCont">
                                        <div className="col-md-12 noPad">
                                            <button className="btn postSubmit FR" name="submit" onClick={(e) => this.handleFormSubmit(e)}>Post</button>
                                            <div className="FR mr-3">Be anonymous</div>
                                            <input
                                                className="FR mr-2 anonBtn"
                                                name="anonymous"
                                                type="checkBox"
                                                value={this.state.anonymous}
                                                onChange={this.anonChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Overlay>
        )
    }
}

export default PostModal;