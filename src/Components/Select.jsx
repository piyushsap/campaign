import React from 'react';

function Select(props) {
  return (
    <select className={props.rootClass}
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
