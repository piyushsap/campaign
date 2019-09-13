import React, {useState} from 'react';
function Input(props) {
  const [value, setvalue] = useState('');
  const onChange = (e) => {
    if(props.onChange) {
      props.onChange(e, props);
    }
    else {
      setvalue(e.currentTarget.value);
    }
  }
  return (
    <div className="form-input">
        { (props.label || props.type==='file') && props.type !=='checkbox' ?(
            <label for= {props.name} >{props.label || 'Browse'}</label>
        ):null}
        <input className="form-control"
            type={props.type || 'text'} 
            name={props.name || props.id} 
            id={props.name || ''}
            className = {'form-control '+props.class || 'form-control'} 
            value={props.value || value}
            placeholder={props.placeholder || 'Enter your Text here'} 
            required={props.validate || false} 
            onBlur={props.handleBlur || null} 
            onChange={e => onChange(e)}
            accept={props.imageValid} />
            
        { props.label  && props.type ==='checkbox' ?(
            <label for= {props.name} >{props.label}</label>
        ):null}
    </div>
  );
}

export default Input;
