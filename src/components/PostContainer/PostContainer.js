import React, { Component } from 'react';
import { Popover } from "reactstrap";
import "./PostContainer.css";

import ReactComment from "./../ReactComment";

const placeholder = "I think pizza is the best for the following reasons: it's delicious, it's full of carbs for tomorrow's workout and -oh yeah, it's delicious..."

class OptionsPop extends Component {
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
    render() {
        let post_id = "Opt" + this.props.post.id;
        return (
            <span onClick={this.togglePop}>
                <span className="material-icons FR" id={post_id}>more_horiz</span>
                <Popover placement="top" isOpen={this.state.popActive} target={post_id} toggle={this.togglePop}>
                    <li className="btn material-icons options">share</li>
                    <li className="btn material-icons options">bookmark</li>
                    <li className="btn material-icons options">report</li>
                </Popover>
            </span>
        )
    }
}


const Comment = (props) => { //Will be used to map out comments
    return (
        <div className="mt-1 col-md-12">
            <div className="iconCont">
                {
                    props.imgUrl ?
                        (<img src={props.imgUrl} alt="icon" className="iconSmall FL noMarg ml-0 mr-3"></img>)
                        :
                        (<button className="iconSmall FL noMarg ml-0 mr-3"></button>)
                }
            </div>
            <div className="comName FL">{props.name}</div>
            <p className="comText FL">{props.text}</p>
        </div>
    )
}

const PostContainer = (props) => {
    // Place holders will be replaced with prop values
    //  console.log(props)
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12 head">
                    <span className="headDet">{props.post.attributes.question_type}</span>
                    <span className="headDet">- today</span>
                    <span className="btn externals">
                        <OptionsPop {...props} />
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 bodyDet">
                    <div className="row">
                        <div className="col-sm-1 iconCont">
                            {props.post.attributes.author_info.avatar_thumb ?
                                (<img src={props.post.attributes.author_info.avatar_thumb} alt="avatar" className="icon mr-3"></img>)
                                :
                                (<button className="icon"></button>)
                            }
                        </div>
                        <div className="col-sm-11">
                            <p className="bodyText mt-2 mb-2">{props.post.attributes.text}</p>
                            <div className="postDetails">
                                <span className="FL mt-1 mr-2">{"Posted by " + props.post.attributes.author_info.name}</span>
                                <span className="FL mt-1 ml-1">Comments by</span>
                                <span className="stackedCont">
                                    {
                                        props.post.attributes.latest_answerers_info[0] ?
                                            (
                                                props.post.attributes.latest_answerers_info.map((user, i) => {
                                                    let imgUrl = user.avatar_thumb;
                                                    // console.log(imgUrl)
                                                    return (
                                                        <img key={i} src={imgUrl} alt="whoops" className="stacked"></img>
                                                    )
                                                })
                                            )
                                            :
                                            (
                                                <span>
                                                    <button className="stacked"></button>
                                                    <button className="stacked"></button>
                                                    <button className="stacked"></button>
                                                    <button className="stacked"></button>
                                                </span>
                                            )
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row reaction mb-2">
                        <ReactComment {...props} />
                    </div>
                </div>

                {
                    props.post.attributes.latest_answerers_info[0] ?
                        (
                            props.post.attributes.latest_answerers_info.map((user, i) => {
                                let name = user.name;
                                let imgUrl = user.avatar_thumb;
                                // console.log(name);
                                return (
                                    <div key={i} className="comments borderTop mb-2">
                                        <Comment imgUrl={imgUrl} name={name} text={placeholder} />
                                    </div>
                                )
                            })
                        )
                        :
                        (
                            <div className="comments borderTop mb-2">
                                <Comment imgUrl="" name="John Smith" text={placeholder} />
                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default PostContainer;
