import React from 'react';
import componentService from './../services/ComponentsService';
const styleAttrs = {
  lineHeight: 'lineHeight',
  textColor: 'color'
}
function Input(props) {
  const onChange = function(e) {
    if(props.name === 'lineHeight' ||props.name === 'textColor' ) {
      componentService.notifyComponentEdit({style: {[styleAttrs[props.name]]: e.currentTarget.value}});
    }
    else {
      componentService.notifyComponentEdit({[props.name] : e.currentTarget.value})
    }
  }
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
            onChange={e => onChange(e)} />
    </div>
  );
}

export default Input;
