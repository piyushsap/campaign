import React from 'react';
import Image from '../../Assets/Images/image.svg';
import text from '../../Assets/Images/text.svg';
import video from '../../Assets/Images/video.svg';
import grid from '../../Assets/Images/grid.svg';
import button from '../../Assets/Images/butotn.svg';
import input from '../../Assets/Images/input.svg';
import divider from '../../Assets/Images/divider.svg';
import form from '../../Assets/Images/form.svg';
import select from '../../Assets/Images/select.svg';
import textarea from '../../Assets/Images/textarea.svg';



const imageMap = {
    Image: Image,
    Text: text,
    Video: video,
    Row:grid,
    Button:button,
    Input:input,
    Divider:divider,
    Form: form,
    Select: select,
    Textarea: textarea,
    Texteditor: text,
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
