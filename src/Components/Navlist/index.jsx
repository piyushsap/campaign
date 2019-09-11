import React from 'react';
import Navitem from './Navitem';

function Navlist(props) {
    return (
        <ul className="element-list">
            {props.componentTypes.map((type, index) => <Navitem key = {index} type = {type}></Navitem>)}
        </ul>
    );
}

export default Navlist;
