import React from 'react';
import "./Overlay.css";

const Overlay = (props) => {
    return (
        <div className="overlay" onClick={() => props.onOverlayClick()}>
            {props.children}
        </div>
    )
}

export default Overlay
