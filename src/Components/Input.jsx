import React from 'react';
function Input(props) {
  
  return (
    <div className="form-input">
        { props.label || props.type==='file' ?(
            <label for= {props.name} >{props.label || 'Browse'}</label>
        ):null}
        <input 
            type={props.type || 'text'} 
            name={props.name || ''} 
            id={props.name || ''}
            className = {'form-control '+props.class || 'form-control'} 
            value={props.value || ''}
            placeholder={props.placeholder || 'Enter your Text here'} 
            required={props.validate || false} 
            onBlur={props.handleBlur || null} 
            onChange={e => props.onChange && props.onChange(e, props)}
            accept={props.imageValid} />
    </div>
  );
}

export default Input;
