import React from 'react';

function Input(props) {
  return (
    <div className="form-input">
        { props.label ?(
            <label>{props.label}</label>
        ):null}
        <input 
            type={props.type} 
            value={props.val} 
            required={props.validate} 
            onBlur={props.handleBlur} 
            onChange={props.handleChange || null} />
    </div>
  );
}

export default Input;
