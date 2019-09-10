import React from 'react';
import Header from './Header';

function ComponentItem({type}) {
    return (
        <li draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', type)}
        >
            <div className="element-item">
                <img src="" alt="name" />
                {type}
        </div>
        </li>
    )
}

function Sidebar() {
    const componentTypes = ['Text', 'Button', 'Input', 'Image', 'Video', 'Text', 'Image', 'Row'];
    return (
        <section className="sidebar">
            <Header />
            <div className="accordion">
                <ul className="element-list">

                    {componentTypes.map((type, index) => <ComponentItem key = {index} type = {type}></ComponentItem>)}
                    {/* <li draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', "text")}
                    >
                        <div className="element-item">
                            <img src="" alt="name" />
                            Text
                    </div>
                    </li>
                    <li draggable>
                        <div className="element-item">
                            <img src="" alt="name" />
                            Image
                    </div>
                    </li>
                    <li draggable>
                        <div className="element-item">
                            <img src="" alt="name" />
                            Video
                    </div>
                    </li>
                    <li draggable>
                        <div className="element-item">
                            <img src="" alt="name" />
                            Text
                    </div>
                    </li>
                    <li draggable>
                        <div className="element-item">
                            <img src="" alt="name" />
                            Text
                    </div>
                    </li> */}
                </ul>
            </div>
        </section>
    );
}

export default Sidebar;
