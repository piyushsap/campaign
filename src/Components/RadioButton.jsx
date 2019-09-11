import React from 'react';

function RadioButton(props) {
  return (
    <label className={props.rootClass}>
            <input
                className="radio-input"
                type="radio"
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
            <span className="radio-label-text" />
            {props.label}
        </label>
  );
}

export default RadioButton;
