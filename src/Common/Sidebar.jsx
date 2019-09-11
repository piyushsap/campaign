import React, {useEffect, useState} from 'react';
import Header from './Header';
import { Text } from '../Components';
import Navlist from '../Components/Navlist';
import Properties from './Properties';
import componentService from './../services/ComponentsService';


function Sidebar() {
    const componentTypes = ['Text', 'Button', 'Input', 'Image', 'Video', 'Text', 'Image', 'Row', 'Divider'];
    const [element, setElement] = useState('Row');
    useEffect(_ => {
        componentService.addComponentChangeSubscriber(data => {
            setElement(data.type);
        })
    }, []);
    return (
        <section className="sidebar">
            <Header />
            <div className="accordion">
                <div className="accordion-item elements">
                    <Text {...{ type: 'h3', text: 'Elements' }} />
                    <Navlist {...{ componentTypes }} />
                </div>
                <div className="accordion-item comp-properties">
                    <Text {...{ type: 'h3', text: 'Properties' }} />
                    <Properties {...{ element }} />
                </div>
            </div>
        </section>
    );
}

export default Sidebar;
