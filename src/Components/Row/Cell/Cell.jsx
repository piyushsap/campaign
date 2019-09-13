import React, {Component} from 'react';
import {componentMap} from './../../../Common/Builder';
import ComponentWrapper from '../../../Common/ComponentWrapper';

class Cell extends Component {
    //state= {components: []};
     handleDrop = (e) => {
        e.stopPropagation();
        const compType = e.dataTransfer.getData('text');
        const newComponent = {
            id: new Date().getTime(),
            name: compType,
            attributes: {label: "Enter Label", style: {}}
        };
       this.props.comp.components.push(newComponent);
      // this.setState({components: this.props.comp.components});
       this.forceUpdate();
       this.props.postRequest();
        //setChildren([...children,compType]);
    };
     clickHandler = (e, comp) => {
        e.stopPropagation();
       // props.comp.new ='test';
       this.props.setSelectedComponent && this.props.setSelectedComponent(comp);
    };

    deleteComponent = (comp) => {
        const components = this.props.comp.components;
        const indexOfComp = components.indexOf(comp);
        components.splice(indexOfComp, 1);
        this.forceUpdate();
    };

    render() {
        const Components = this.props.comp.components.map((child, index) => {
            const CompName = componentMap[child.name];
            return <ComponentWrapper key = {child.id} clickHandler = {e => {this.clickHandler(e, child)}} handleDelete = {_ => this.deleteComponent(child)}><CompName {...child.attributes}/></ComponentWrapper>
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