import React from 'react';
import element from '../../Static/Elements';
import './property.scss';
import Propertyitem from './propertyItem';


function Properties(props) {
    let elems = element[props.element][0];
    return (
        <section className="properties">
        {
            Object.keys(elems).map((key) => {
                const comp = elems[key];
                    comp.key = key;
                    comp.default= elems['default']
                return <Propertyitem key={key} {...{ element: comp }} />
            })}
        </section>
    );
}

export default Properties;
