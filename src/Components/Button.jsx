import React from 'react';
import {styleToObject} from './../Common/utils';

function Button(props) {
    return (
        <div className="form-button">
            <button className={'btn '+props.class} style = {styleToObject(props.customStyle)}
                type={props.type}
                onClick={props.handleClick || null}>
                {props.val || 'Submit' }</button>
        </div>
    );
}

export default Button;
