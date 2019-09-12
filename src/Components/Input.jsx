import React from 'react';
function Input(props) {
  
  return (
    <div className="form-input">
        { props.label ?(
            <label>{props.label}</label>
        ):null}
        <input className="form-control"
            type={props.type || 'text'} 
            name={props.name || ''} 
            id={props.name || ''} 
            placeholder={props.placeholder || 'Enter your Text here'} 
            required={props.validate || false} 
            onBlur={props.handleBlur || null} 
            onChange={e => props.onChange && props.onChange(e, props)} />
    </div>
  );
}

export default Input;
