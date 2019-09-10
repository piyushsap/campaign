import React, {useState} from 'react';
import {componentMap} from './../../../Common/Builder';

function Cell() {
    const handleDrop = (e) => {
        e.stopPropagation();
        const compType = e.dataTransfer.getData('text');
        setChild(compType);
    };
    const [child, setChild] = useState(null);
    const ComponentName = child && componentMap[child]
    return (
        <div className = "cell" onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e)}>
            { ComponentName ? <ComponentName /> : 'Drag Components Here'}
        </div>
    )
} 

Cell.defaultProps= {
    cells: 1
};

export default Cell;