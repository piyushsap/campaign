import React from 'react';
import Image from '../../Assets/Images/image.svg';
import text from '../../Assets/Images/text.svg';
import video from '../../Assets/Images/video.svg';
import grid from '../../Assets/Images/grid.svg';
import button from '../../Assets/Images/butotn.svg';


const imageMap = {
    Image: Image,
    Text: text,
    Video: video,
    Row:grid,
    Button:button
}
function Navitem(props) {
    return (
        <li draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', props.type)}
        >
            <div className="element-item">
                <img src={imageMap[props.type]} alt={props.type} />
                {props.type}
        </div>
        </li>
    );
}

export default Navitem;
