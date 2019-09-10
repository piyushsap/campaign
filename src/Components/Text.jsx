import React from 'react';

function Text(props) {
  return (
    <div className="text-input " contentEditable>
        <props.type>
            {props.text || 'test'}
        </props.type>
    </div>
  );
}

Text.defaultProps = {
  type: 'p',

};

export default Text;
