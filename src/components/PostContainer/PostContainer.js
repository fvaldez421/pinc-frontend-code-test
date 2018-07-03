import React from 'react';
import "./PostContainer.css"

const Comment = (props) => { //Will be used to map out comments
    return (
        <div className="mt-2">
            <div className="iconCont">
                <button className="iconSmall mr-3 FL">{props.icon}</button>
            </div>
            <div className="comName FL">{props.name}</div>
            <p className="comText FL">{props.text}</p>
        </div>
    )
}

const PostContainer = (props) => { // Place holders will be replaced with prop values
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12 head">
                    <span className="headDet">Racism & Equality</span>
                    <span className="headDet">- today</span>
                    <span className="externals">                        
                        <span className="FR">options</span>
                        <span className="FR">bookmark</span>
                        <span className="FR">share</span>
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 bodyDet">
                    <span className="">
                        <div className="iconCont">
                            <button className="icon mr-3"></button>
                        </div>
                        <p className="bodyText">What is the goal of the Black Lives Matter movement?</p>
                        <div className="postDetails">
                            <span className="FL mt-1">Posted by Blank Blank</span>
                            <span className="FL mt-1 ml-1">Comments by SMICN</span>
                            <button className="FR reactBtn">React</button>
                        </div>
                    </span>
                </div>
                <div className="comments borderTop">
                    {/*Will be a replaced with a map function later to post all comments */}
                    <Comment icon="" name="John Smith" text="I think the point is..."/>
                </div>
            </div>
        </div>
    )
}

export default PostContainer;
