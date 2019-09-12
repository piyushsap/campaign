import React from 'react';
import {Input, Select} from '../../Components'
import componentService from './../../services/ComponentsService';

function Propertyitem(props) {
  const styleAttrs = {
    lineHeight: 'lineHeight',
    color: 'color'
  };
    const onChange = function(e) {
        props.onPropertyChange(e, props);
    };
      const attrName = props.element.key;
      let value;
      if(styleAttrs[attrName]) {
        value = props.component.attributes.style[attrName];
      }
      else {
        value = props.component.attributes[attrName];
      }
      if(props.element.key === 'text') {
        debugger;

      }
    return (
        <div className="properties-item">
            <label>{props.element.label}</label>
            {props.element.inputType==='select' ?(
                <Select value = {value} onChange = {onChange} {...{options:props.element.options,className:'check',name:props.element.key}} />
            ):null}
            {props.element.inputType==='color' || props.element.inputType==='text' || props.element.inputType==='file' ?(
                <Input  value = {value} onChange = {onChange} {...{type:props.element.inputType, placeholder:'',name:props.element.key}} />
            ):null}
        </div>
    );
}

export default Propertyitem;
