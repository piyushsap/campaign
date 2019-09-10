import React from 'react';

function Text(props) {
  return (
    <div className="text-input">
        <props.type>
            {props.text}
        </props.type>
    </div>
  );
}

export default Text;
