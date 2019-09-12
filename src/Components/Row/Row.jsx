import React from 'react';
import {Cell} from './../../Components/index';

function Row(props) {
    const updateComponent = () => {

    }
    return (
        <div className = 'row'>
            {props.cells && props.cells.map((item, index) => <Cell  updateComponent= {updateComponent} {...props} key = {index} comp = {props.cells[index]}/>)}
        </div>
    )
} 

export default Row;