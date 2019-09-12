import React, {Component} from 'react';
import {componentMap} from './../../../Common/Builder';
import ComponentWrapper from '../../../Common/ComponentWrapper';

class Cell extends Component {
    state= {components: []};
     handleDrop = (e) => {
        e.stopPropagation();
        const compType = e.dataTransfer.getData('text');
        const newComponent = {
            id: new Date().getTime(),
            name: compType,
            attributes: {label: "hello", style: {'fontWeight': 'bold'}, 'src': 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg', 'videoUrl': 'https://www.youtube.com/embed/b_-dgO63ORs'}
        };
       this.props.comp.components.push(newComponent);
       this.setState({components: this.props.comp.components});
       this.forceUpdate();
       this.props.postRequest();
        //setChildren([...children,compType]);
    };
     clickHandler = (e, comp) => {
        e.stopPropagation();
       // props.comp.new ='test';
        this.props.setSelectedComponent(comp);
    };

    render() {
        const Components = this.state.components.map((child, index) => {
            const CompName = componentMap[child.name];
            return <ComponentWrapper key = {child.id} clickHandler = {e => {this.clickHandler(e, child)}}><CompName {...child.attributes}/></ComponentWrapper>
        });
        return (
            <div className = "cell" onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => this.handleDrop(e)}>
                { Components.length ? Components  : 'Drag Components Here'}
            </div>
        )
    }
    
} 

Cell.defaultProps= {
    cells: 1
};

export default Cell;