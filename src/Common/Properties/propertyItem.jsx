import React from 'react';
import {Input, Select, Textarea} from '../../Components'

function Propertyitem(props) {
    console.log(props.element.default[props.element.key])
    return (
        <div className="properties-item">
            <label>{props.element.label}</label>
            {props.element.inputType==='select' ?(
                <Select {...{options:props.element.options,className:'check',name:props.element.key,value:props.element.default[props.element.key]}} />
            ):null}
            {props.element.inputType==='color' || props.element.inputType==='text' || props.element.inputType==='file' ?(
                <Input {...{type:props.element.inputType, placeholder:'',name:props.element.key,value:props.element.default[props.element.key]}} />
            ):null}
            {props.element.inputType==='textarea' ?(
                <Textarea {...{options:props.element.options,className:'check',name:props.element.key}} />
            ):null}
        </div>
    );
}

export default Propertyitem;
