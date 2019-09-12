import React from 'react';
import {Cell} from './../../Components/index';

function Row(props) {
    return (
        <div className = 'row'>
            {props.cells && props.cells.map((item, index) => <Cell key = {index} />)}
        </div>
    )
} 

export default Row;