import React from 'react';
import { Text } from '../Components';
import Properties from './Properties';


function SidebarRight(props) {
    const componentTypes = ['Text', 'Button', 'Input', 'Image', 'Video', 'Text', 'Image', 'Row', 'Divider'];
    // const [component, setComponent] = useState('Row');
    // useEffect(_ => {
    //     componentService.addComponentChangeSubscriber(data => {
    //         setElement(data.type);
    //     })
    // }, []);
    return (
        <section className="sidebar sidebar-right">
            <div className="accordion">
                {/* <div className="accordion-item comp-properties">
                    <Text {...{ type: 'h3', text: 'Properties' }} />
                    <Properties {...{ element: 'text' }} />
                </div> */}
                <div className="accordion-item comp-properties">
                    <Text {...{ type: 'h3', text: 'Properties' }} />
                    <Properties {...props} />
                </div>
            </div>
        </section>
    );
}

export default SidebarRight;
