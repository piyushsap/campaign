import React from 'react';

function Checkbox(props) {
  return (
    <label className={props.rootClass}>
            <input
                className="checkbox"
                type="checkbox"
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
            <span className="checkbox-label-text" />
            {props.label}
        </label>
  );
}

export default Checkbox;
