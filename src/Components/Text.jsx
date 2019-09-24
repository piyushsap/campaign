import React from 'react';
import {styleToObject} from './../Common/utils';

function Text(props) {
  return (
    <div className="text-input " >
        <props.type contenteditable={props.contentedit || false} style = {{...props.style, ...styleToObject(props.customStyle)}} onInput ={e => props.updateAttributes(props.id, {text : e.currentTarget.innerText})}>
            {props.text || 'Lorem ipsum dolor sit amet'}
        </props.type>
    </div>
  );
}

Text.defaultProps = {
  type: 'h1',

};

export default Text;
