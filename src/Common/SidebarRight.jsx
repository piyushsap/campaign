import React from 'react';
import Header from './Header';
import { Text } from '../Components';
import Properties from './Properties';
import componentService from './../services/ComponentsService';


function SidebarRight() {
    const componentTypes = ['Text', 'Button', 'Input', 'Image', 'Video', 'Text', 'Image', 'Row', 'Divider'];
    const [element, setElement] = useState('Row');
    useEffect(_ => {
        componentService.addComponentChangeSubscriber(data => {
            setElement(data.type);
        })
    }, []);
    return (
        <section className="sidebar sidebar-right">
            <Header />
            <div className="accordion">
                <div className="accordion-item comp-properties">
                    <Text {...{ type: 'h3', text: 'Properties' }} />
                    <Properties {...{ element: 'text' }} />
                </div>
                <div className="accordion-item comp-properties">
                    <Text {...{ type: 'h3', text: 'Properties' }} />
                    <Properties {...{ element }} />
                </div>
            </div>
        </section>
    );
}

export default SidebarRight;
