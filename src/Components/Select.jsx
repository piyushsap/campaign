import React from 'react';

function Select(props) {
  return (
    <select className={props.rootClass}>
        {props.options.map(o => (
            <option value={o.customValue}>
                {o.customName}
            </option>
        ))}
    </select>
  );
}

export default Select;
