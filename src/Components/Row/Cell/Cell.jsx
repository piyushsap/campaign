import React, {useState} from 'react';
import {componentMap} from './../../../Common/Builder';

function Cell() {
    const handleDrop = (e) => {
        e.stopPropagation();
        const compType = e.dataTransfer.getData('text');
        setChildren([...children,compType]);
    };
    const [children, setChildren] = useState([]);
    const Components = children.map(child => {
        const CompName = componentMap[child];
        return <CompName onClick = {e => {console.log("hi");e.preventDefault()}}/>
    });
    return (
        <div className = "cell" onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e)}>
            { Components.length ? Components  : 'Drag Components Here'}
        </div>
    )
} 

Cell.defaultProps= {
    cells: 1
};

export default Cell;