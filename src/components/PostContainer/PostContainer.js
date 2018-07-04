import React from 'react';
import "./PostContainer.css"

const placeholder = "I think pizza is the best for the following reasons: it's delicious, it's full of carbs for tomorrow's workout and -oh yeah, it's delicious..."

const Comment = (props) => { //Will be used to map out comments
    return (
        <div className="mt-2">
            <div className="iconCont">
                {
                    props.imgUrl ?
                        (<img src={props.imgUrl} alt="icon" className="iconSmall mr-3 FL"></img>)
                        :
                        (<button className="iconSmall mr-3 FL"></button>)
                }
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
                    <span className="headDet">{props.post.attributes.question_type}</span>
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
                            {props.post.attributes.author_info.avatar_thumb ?
                                (<img src={props.post.attributes.author_info.avatar_thumb} alt="avatar" className="icon"></img>)
                                :
                                (<button className="icon"></button>)
                            }
                        </div>
                        <p className="bodyText">{props.post.attributes.text}</p>
                        <div className="postDetails">
                            <span className="FL mt-1">{"Posted by " + props.post.attributes.author_info.name}</span>
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
                            <button className="btn mt-1 FR reactBtn">React</button>
                        </div>
                    </span>
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

                <div className="addCom borderTop">
                    <div className="mt-0 mb-0">
                        <div className="iconCont">
                            {
                                props.user.attributes.avatar_thumb ?
                                    (<img src={props.user.attributes.avatar_thumb} alt="icon" className="iconSmall mr-3 FL"></img>)
                                    :
                                    (<button className="iconSmall mr-3 FL"></button>)
                            }
                        </div>
                        <p className="btn comText FL mt-2">Share your thoughts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostContainer;
