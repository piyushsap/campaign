import React from 'react';

function Button(props) {
    return (
        <div className="form-button">
            <button
                type={props.type}
                onClick={props.handleClick || null}>
                {props.val || 'Submit' }</button>
        </div>
    );
}

export default Button;
