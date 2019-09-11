import React from 'react';
import {Input, Select} from '../../Components'

function Propertyitem(props) {
    return (
        <div className="properties-item">
            <label>{props.element.label}</label>
            {props.element.inputType==='select' ?(
                <Select {...{options:props.element.options,className:'check',name:props.element.key}} />
            ):null}
            {props.element.inputType==='color' || props.element.inputType==='text' || props.element.inputType==='file' ?(
                <Input {...{type:props.element.inputType, placeholder:'',name:props.element.key}} />
            ):null}
        </div>
    );
}

export default Propertyitem;
