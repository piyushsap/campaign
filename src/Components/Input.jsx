import React from 'react';

function Input(props) {
  return (
    <div className="form-input">
        { props.label ?(
            <label>{props.label}</label>
        ):null}
        <input 
            type={props.type || 'text'} 
            value={props.val || ''} 
            required={props.validate || false} 
            onBlur={props.handleBlur || null} 
            onChange={props.handleChange || null} />
    </div>
  );
}

export default Input;
