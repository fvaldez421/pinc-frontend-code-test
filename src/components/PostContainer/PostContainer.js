import React from 'react';
import "./PostContainer.css"

const PostContainer = (props) => {
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12 head">
                    <span className="headDet">Racism & Equality</span>
                    <span className="headDet">- today</span>
                    <span className="externals">
                        <span className="FR">share</span>
                        <span className="FR">bookmark</span>
                        <span className="FR">options</span>
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
                <div className="comments">
                </div>
            </div>


        </div>
    )
}

export default PostContainer;
