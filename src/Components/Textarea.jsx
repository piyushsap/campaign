import React from 'react';

function Textarea(props) {
    
    return (
        <textarea placeholder={props.placeholder} name={props.name} id={props.name} className={props.rootClass}/>
    );
}

export default Textarea;