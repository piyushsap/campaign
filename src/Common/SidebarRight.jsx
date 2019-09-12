import React from 'react';
import Header from './Header';
import { Text } from '../Components';
import Navlist from '../Components/Navlist';
import Properties from './Properties';


function SidebarRight() {
    const componentTypes = ['Text', 'Button', 'Input', 'Image', 'Video', 'Text', 'Image', 'Row', 'Divider'];
    return (
        <section className="sidebar sidebar-right">
            <Header />
            <div className="accordion">
                <div className="accordion-item comp-properties">
                    <Text {...{ type: 'h3', text: 'Properties' }} />
                    <Properties {...{ element: 'text' }} />
                </div>
            </div>
        </section>
    );
}

export default SidebarRight;
