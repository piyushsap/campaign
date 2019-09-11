import React from 'react';

function Input(props) {
  return (
    <div className="form-input">
        { props.label ?(
            <label>{props.label}</label>
        ):null}
        <input 
            type={props.type || 'text'} 
            name={props.name || ''} 
            id={props.name || ''} 
            placeholder={props.placeholder || 'Enter your Text here'} 
            required={props.validate || false} 
            onBlur={props.handleBlur || null} 
            onChange={props.handleChange || null} />
    </div>
  );
}

export default Input;
