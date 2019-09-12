import React from 'react';
import element from '../../Static/Elements';
import './property.scss';
import Propertyitem from './propertyItem';


function Properties(props) {
    if(!props.component) {
        return null;
    }
    let elems = element[props.component.name][0];
    return (
        <section className="properties">
        {
            Object.keys(elems).map((key) => {
                const comp = elems[key];
                    comp.key = key;
                    comp.default= elems['default']
                return <Propertyitem {...props} key={key} {...{ element: comp }} />
            })}
        </section>
    );
}

export default Properties;
