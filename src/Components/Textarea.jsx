import React from 'react';

function Textarea(props) {
    
    return (
        <textarea placeholder={props.placeholder} className={props.rootClass}/>
    );
}

export default Textarea;