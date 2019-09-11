import React from 'react';

function Input(props) {

  return (
    <div className="form-input">
        { props.label ?(
            <label>{props.label}</label>
        ):null}
        <input 
            type={props.type || 'text'} 
            placeholder={props.placeholder || 'Enter your Text here'} 
            required={props.validate || false} 
            onBlur={props.handleBlur || null} 
            onChange={e => props.updateAttributes(props.id, {val : e.currentTarget.value})} />
    </div>
  );
}

export default Input;
