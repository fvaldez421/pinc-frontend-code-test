import React, { Component } from 'react';
import { Popover, PopoverBody } from "reactstrap";

class ReactComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popActive: false,
        };
        this.togglePop = this.togglePop.bind(this);
    }

    togglePop() {
        // console.log(!this.state.popActive);
        this.setState({ popActive: !this.state.popActive })
    }

    setEmoji(emojiID) {
        let postUpdate = {
            emojiID,
            post: this.props.post
        }
        this.props.sendReaction(postUpdate)
    }

    render() {
        let emojiList = [
            "em em-smiley",
            "em em-thinking_face",
            "em em-face_vomiting",
            "em em-angry",
            "em em-smirk"
        ];
        let post_id = "Emo"+ this.props.post.id;
        return (
            <div className="col-md-12">
                <span onClick={this.togglePop}>
                    <div className="btn reactPills" id={post_id}>
                        <div className="pillCont">
                            <div className="material-icons FL mr-1">insert_emoticon</div>
                            <div className="FL">React</div>
                        </div>
                    </div>
                    <Popover placement="top" isOpen={this.state.popActive} target={post_id} toggle={this.togglePop}>
                        <PopoverBody>
                            {
                                emojiList.map((emojiClass, i) => {
                                    return (
                                        <i 
                                            key={i}
                                            className={"btn " + emojiClass + " mr-1 ml-1"}  
                                            onClick={() => this.setEmoji(i)}
                                        />
                                    )
                                })
                            }
                        </PopoverBody>
                    </Popover>
                </span>

                <div className="btn reactPills" onClick={() => this.props.renderModal("Comment", this.props.post)}>
                    <div className="pillCont">
                        <span className="material-icons FL mr-1">message</span>
                        <span>Comment</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactComment;


