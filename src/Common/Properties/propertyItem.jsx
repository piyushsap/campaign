import React from 'react';
import {Input, Select} from '../../Components'
import componentService from './../../services/ComponentsService';

function Propertyitem(props) {
    const onChange = function(e) {
        props.onPropertyChange(e, props);
      }
    return (
        <div className="properties-item">
            <label>{props.element.label}</label>
            {props.element.inputType==='select' ?(
                <Select onChange = {onChange} {...{options:props.element.options,className:'check',name:props.element.key}} />
            ):null}
            {props.element.inputType==='color' || props.element.inputType==='text' || props.element.inputType==='file' ?(
                <Input onChange = {onChange} {...{type:props.element.inputType, placeholder:'',name:props.element.key}} />
            ):null}
        </div>
    );
}

export default Propertyitem;
