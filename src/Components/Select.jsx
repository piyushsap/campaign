import React from 'react';
import componentService from './../services/ComponentsService';

function Select(props) {
  return (
    <select className={props.rootClass} onChange={e => componentService.notifyComponentEdit({[props.name] : e.currentTarget.value})}
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
