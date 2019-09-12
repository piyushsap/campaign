import React from 'react';
import {Cell} from './../../Components/index';

function Row(props) {
    return (
        <div className = 'row'>
            {[...Array(props.cells)].map((item, index) => <Cell key = {index} />)}
        </div>
    )
} 

Row.defaultProps= {
    cells: 1
};

export default Row;