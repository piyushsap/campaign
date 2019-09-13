import React, {useState} from 'react';
import { optionalCallExpression } from '@babel/types';

function Select(props) {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    if(props.onChange) {
      props.onChange && props.onChange(e, props);
    }
    else {
      setValue(e.currentTarget.value);
    }
  };
  let options = []
  if (props.options && typeof props.options === "string") {
    options = props.options.split(',');
  } else {
    options = props.options || [];
  }
  return (
    <div className="form-input">
      { props.label ?(
          <label for= {props.name} >{props.label}</label>
      ):null}
      <select className={'form-control ' + props.rootClass} value={props.value || value} onChange={e => onChange(e)}
        name={props.name || ''}
        id={props.name || ''} >
        {options.map((o, index) => (
          <option key={index} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
