import React from 'react';
import Header from './Header';

function Sidebar() {
    return (
        <section className="sidebar">
            <Header />
            <div className="accordion">
                <ul className="element-list">
                    <li draggable>
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
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Sidebar;
