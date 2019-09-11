import React from 'react';

function Text(props) {
  return (
    <div className="text-input " >
        <props.type contenteditable={props.contentedit || false} style = {props.style} onInput ={e => props.updateAttributes(props.id, {text : e.currentTarget.innerText})}>
            {props.text || 'test'}
        </props.type>
    </div>
  );
}

Text.defaultProps = {
  type: 'p',

};

export default Text;
