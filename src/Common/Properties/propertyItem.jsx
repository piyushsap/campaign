import React from 'react';
import {Input, Select, Textarea} from '../../Components'

function Propertyitem(props) {
  const styleAttrs = {
    lineHeight: 'lineHeight',
    color: 'color'
  };
    const onChange = function(event) {
      if(props.element.inputType==='file') {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {

              //setImage(e.target.result);
              props.onPropertyChange(e, props);
          };

          reader.readAsDataURL(event.target.files[0]);
        }
      }
      else {
        props.onPropertyChange(event, props);
      }
    };
      const attrName = props.element.key;
      let value;
      if(!props.component.attributes.style) {
        props.component.attributes.style = {};
      }
      if(styleAttrs[attrName]) {
        value = props.component.attributes.style[attrName];
      }
      else if(attrName === 'columns') {
        value = props.component.attributes.cells && props.component.attributes.cells.length + '';
      }
      else {
        value = props.component.attributes[attrName];
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
            {props.element.inputType==='textarea' ?(
                <Textarea   value = {value || ''} onChange = {onChange} {...{placeholder:'',name:props.element.key}}/>
            ):null}
        </div>
    );
}

export default Propertyitem;
