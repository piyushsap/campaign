import React, {useState} from 'react';

function Textarea(props) {
    return (
        <div className="form-input">
            { props.label ?(
                <label for= {props.name} >{props.label || 'Browse'}</label>
            ):null}
            <textarea onChange = {props.onChange} placeholder={props.placeholder} name={props.name} id={props.name} className={'form-control '+props.rootClass} value = {props.value}></textarea>
        </div>
    );
}

export default Textarea;