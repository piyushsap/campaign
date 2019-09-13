import React, { Component, Fragment } from 'react';
import { Input, Button, Text, Row, Image, Video, Checkbox, RadioButton, Divider, Texteditor, Formcomp,Select,Textarea } from '../Components/index';
import componentService from './../services/ComponentsService';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import SidebarRight from './SidebarRight';
import ComponentWrapper from './ComponentWrapper';


export const componentMap = {
  Text: Text,
  Image: Image,
  Button: Button,
  Input: Input,
  Video: Video,
  Checkbox: Checkbox,
  RadioButton: RadioButton,
  Divider: Divider,
  Form: Formcomp,
  Row: Row,
  Select: Select,
  Textarea: Textarea,
};
let selectedId = 0;
let index = 1;
class Builder extends Component {
  //const [components, setComponents] = useState([]);
  state = { components: [], selectedComponent: null };

  // useEffect(_ => {
  //     componentService.postComponents(components);
  // }, [components.length]);
  updateAttributes = (attributes, customObj) => {

    const components = this.state.components;
    const comp = this.state.selectedComponent;
    let updatedComp;
    const compIndex = components.findIndex(c => c.id === comp.id);
    if (this.subComponent) {
      updatedComp = comp;
      //updatedComp.id =new Date().getTime();
    }
    else {
      updatedComp = { ...comp };
    }
    if (customObj) {
      if (customObj.type === 'Row') {
        updatedComp.attributes.cells = [...Array(customObj.value)].map((item, index) => {
          return {
            id: index,
            name: 'Cell',
            attributes: { style: {} },
            components: []
          }
        });
      }
    }
    else {
      const updatedStyles = { ...updatedComp.attributes.style, ...attributes.style };
      updatedComp.attributes = { ...updatedComp.attributes, ...attributes };
      updatedComp.attributes = { ...updatedComp.attributes, style: updatedStyles };
    }
    if (this.subComponent) {
      this.setState({ selectedComponent: updatedComp });
    }
    else {
      this.setState({ components: [...components.slice(0, compIndex), updatedComp, ...components.slice(compIndex + 1)], selectedComponent: updatedComp });
    }
  }

  componentDidMount() {
    this.campaignID = this.props.match.params.id;
    //componentService.addComponentEditSubscriber((attributes) => this.updateAttributes(selectedId, attributes));
    componentService.fetchComponents(this.props.match.params.id).then(response => {
      this.setState({ components: response });
      console.log(this.state.components)
    });
  }

  componentDidUpdate() {
    this.postRequest();
  }

  postRequest = () => {
    console.log(1111);
    componentService.postComponents(this.state.components, this.campaignID);

  }

  handleDrop = (e) => {
    const components = this.state.components;
    const compType = e.dataTransfer.getData('text');
    
    const currentComponent = e.target.closest(".component-container");
    const id = new Date().getTime();
    selectedId = id;
    
    const newComponent = {
      id,
      name: compType,
      attributes: {label: "Enter Label", style: {}}
    };
    
    if (compType === 'Form') {
      newComponent.components= [];
    }

    if (currentComponent) {
      const componentIndex = [...document.querySelector('.builder-wrapper').children].indexOf(currentComponent) + 1;
      const newComponents = [...components.slice(0, componentIndex),
        newComponent, ...components.slice(componentIndex)];
      this.setState({ components: newComponents });
      //setComponents(newComponents);
    }
    else {
      this.setState({ components: [...components, newComponent] });
    }
    componentService.notifyComponentChange({ type: compType });
  };

  onComponentClick = (comp) => {
    this.subComponent = false;
    this.setState({ 'selectedComponent': comp });
    //selectedId = id;
    //componentService.notifyComponentChange({type: compType});
  }

  onComponentChange = (e, props) => {
    this.updateAttributes({ 'imageSrc': e.target.result });
  }

  onPropertyChange = (e, props) => {
    const styleAttrs = {
      lineHeight: 'lineHeight',
      color: 'color'
    };
    const propName = props.element.key;
    if (propName === 'lineHeight' || propName === 'color') {
      this.updateAttributes({ style: { [styleAttrs[propName]]: e.currentTarget.value } });
    }
    else if (propName === 'columns') {
      this.updateAttributes(null, { type: 'Row', value: parseInt(e.currentTarget.value) });
    }
    else if (propName === 'image') {
      this.updateAttributes({ 'imageSrc': e.target.result });
    }
    else if (propName === 'style') {
      const style = { 'color': 'blue' };
      try {
        const style = JSON.parse(e.currentTarget.value);
        if (typeof style === "object") {
          this.updateAttributes({ style: style });
        }
      }
      catch {

      }

    }
    else {
      this.updateAttributes({ [propName]: e.currentTarget.value });
      // componentService.notifyComponentEdit({[props.name] : e.currentTarget.value})
      //props.component.attributes = {...props.component.attributes, propName: e.currentTarget.value};
    }
  }

  setSelectedComponent = (comp) => {
    this.subComponent = true;
    this.setState({ 'selectedComponent': comp });
  }

  deleteComponent = (comp) => {
    const components = this.state.components;
    const indexOfComp = components.indexOf(comp);
    components.splice(indexOfComp, 1);
    this.setState({ components });

  }

  render() {
    return (
      <Fragment>
        <Sidebar />
        <section className="builder">
          <h2>Builder
              <Button {...{ type: "button", val: "Publish", class: 'publish', handleClick: this.postRequest }} />
            <NavLink to={'/publish/' + this.campaignID}><Button {...{ type: "button", val: "Preview", class: 'preview' }} /></NavLink>
          </h2>
          <div className="builder-wrapper" onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => this.handleDrop(e)}>
            {/* <Text />
                <Input {...{ type: "text", placeHolder: "bonus", id: "bonus" }} />
                <Button {...{type:"submit", val:"cheking"}}/> */}
            {this.state.components.map(comp => {
              const CompName = componentMap[comp.name];
              return <ComponentWrapper clickHandler={(e) => { this.onComponentClick(comp) }} key={comp.id} handleDelete = {_ => this.deleteComponent(comp)}  ><CompName components={this.state.components} name={comp.compType} comp={comp} onChange={this.onComponentChange} {...comp.attributes} key={comp.id} id={comp.id} updateAttributes={this.updateAttributes} postRequest={this.postRequest} setSelectedComponent={this.setSelectedComponent}  /></ComponentWrapper>
            })}
          </div>
        </section>
        <SidebarRight onPropertyChange={this.onPropertyChange} component={this.state.selectedComponent} />
      </Fragment>
    );
  }
}

export default Builder;
