import React from 'react';
import { optionalCallExpression } from '@babel/types';

function Select(props) {
  let options = []
  if (props.options) {
    options = props.options.split(',');
  } else {
    options = []
  }
  return (
    <div className="form-input">
      { props.label ?(
          <label for= {props.name} >{props.label}</label>
      ):null}
      <select className={'form-control ' + props.rootClass} value={props.value || ''} onChange={e => props.onChange && props.onChange(e, props)}
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
