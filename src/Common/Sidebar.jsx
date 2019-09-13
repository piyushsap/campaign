import React from 'react';
import Header from './Header';
import { Text, Textarea } from '../Components';
import Navlist from '../Components/Navlist';


function Sidebar() {
    const componentTypes = ['Text', 'Button', 'Input', 'Image', 'Video', 'Row', 'Divider', 'Form','Select','Textarea', 'Texteditor'];
    return (
        <section className="sidebar">
            <Header />
            <div className="accordion">
                <div className="accordion-item elements">
                    <Text {...{ type: 'h3', text: 'Elements' }} />
                    <Navlist {...{ componentTypes }} />
                </div>
            </div>
        </section>
    );
}

export default Sidebar;
