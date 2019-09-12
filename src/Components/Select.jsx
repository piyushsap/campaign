import React from 'react';

function Select(props) {
  return (
    <select className={props.rootClass} onChange={e => props.onChange && props.onChange(e, props)}
        name={props.name || ''} 
        id={props.name || ''} >
        {props.options.map((o,index) => (
            <option key={index} value={o}>
                {o}
            </option>
        ))}
    </select>
  );
}

export default Select;
