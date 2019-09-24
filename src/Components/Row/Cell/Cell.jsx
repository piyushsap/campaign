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
       this.props.components.push(newComponent);
       this.forceUpdate();
       //this.props.postRequest();
        //setChildren([...children,compType]);
    };
     clickHandler = (e, comp) => {
        e.stopPropagation();
        debugger;
       this.props.setSelectedComponent && this.props.setSelectedComponent(comp);
    };

    deleteComponent = (comp) => {
        const components = this.props.components;
        const indexOfComp = components.indexOf(comp);
        components.splice(indexOfComp, 1);
        this.forceUpdate();
    };

    render() {
        const Components = this.props.components ? this.props.components.map((child, index) => {
            const CompName = componentMap[child.name];
            return <ComponentWrapper key = {child.id} clickHandler = {e => {this.clickHandler(e, child)}} handleDelete = {_ => this.deleteComponent(child)}><CompName {...child.attributes}/></ComponentWrapper>
        }) : [];
        let style = {flex: 1};
        if(this.props.style) {
            style = {...style, ...this.props.style};
        }
        return (
            <div  style = {style} className = "cell" onDragOver={(e) => e.preventDefault()}
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