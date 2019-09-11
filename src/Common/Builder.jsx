import React, { useState, useEffect, Component }  from 'react';
import {Input, Button, Text, Row, Image, Video, Checkbox, RadioButton, Divider} from '../Components/index';
import componentService from './../services/ComponentsService';


function ComponentWrapper(props) {
  let compParent = React.createRef();
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    compParent.current.classList.add('hover');
  };

  const handleDragLeave = (e) => {
    compParent.current.classList.remove('hover');
  };

  return (
    <div ref={compParent} onDragOver = {(e) => handleDragOver(e)}
    onDragEnter = {(e) => handleDragEnter(e)} 
    onDragLeave = {(e) => handleDragLeave(e)} 
    onDrop =  {(e) => handleDragLeave(e)} 
    className ="component-container">
      {props.children}
    </div>
  )
};


export const componentMap = {
  Text: Text,
  Image: Image,
  Button: Button,
  Input: Input,
  Video: Video,
  Checkbox: Checkbox,
  RadioButton: RadioButton,
  Divider: Divider,
  Row: Row
};
let selectedId = 0;
let index = 1;
class Builder extends Component {
  //const [components, setComponents] = useState([]);
  state = {components: []};

  // useEffect(_ => {
  //     componentService.postComponents(components);
  // }, [components.length]);
  updateAttributes = (id, attributes) => {
    const components = this.state.components;
    const compIndex = components.findIndex(c => c.id === id);
    if(compIndex > -1) {
      const comp = components[compIndex];
      const updatedComp = {...comp};
      updatedComp.attributes = {...updatedComp.attributes, ...attributes};
      this.setState({components: [...components.slice(0, compIndex), updatedComp, ...components.slice(compIndex + 1)]});
    }
  }

  componentDidMount() {
    componentService.addComponentEditSubscriber((attributes) => this.updateAttributes(selectedId, attributes));
    componentService.fetchComponents().then(response => {
      this.setState({components: response});
    });
  }

  componentDidUpdate() {
    componentService.postComponents(this.state.components);
  }

  handleDrop = (e) => {
    const components = this.state.components;
    const compType = e.dataTransfer.getData('text');
    const currentComponent = e.target.closest(".component-container");
    selectedId = index;
    if(currentComponent) {
      const componentIndex = [...document.querySelector('.builder-wrapper').children].indexOf(currentComponent) + 1;
      const newComponents = [...components.slice(0, componentIndex), 
      {id: index++,
        name: compType,
        attributes: {label: "hello", style: {'fontWeight': 'bold'}, 'src': 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg', 'videoUrl': 'https://www.youtube.com/embed/b_-dgO63ORs'}
      },...components.slice(componentIndex)];
      this.setState({components: newComponents});
      //setComponents(newComponents);
    }
    else {
      this.setState({components:[...components, {
        id: index++,
        name: compType,
        attributes: {label: "hello", style: {'fontWeight': 'bold'}, 'src': 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg', 'videoUrl': 'https://www.youtube.com/embed/b_-dgO63ORs'}
      }]});
    } 
    componentService.notifyComponentChange({type: compType});
  };

  render() {
    return (
      <section className="builder">
          <h2>Builder <Button {...{type:"button", val:"Publish",class:'publish'}}/></h2>
          <div className="builder-wrapper" onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => this.handleDrop(e)}>
              {/* <Text />
              <Input {...{ type: "text", placeHolder: "bonus", id: "bonus" }} />
              <Button {...{type:"submit", val:"cheking"}}/> */}
              {this.state.components.map(comp => {
                const CompName = componentMap[comp.name];
                return <ComponentWrapper><CompName {...comp.attributes} key = {comp.id} id = {comp.id} updateAttributes = {this.updateAttributes}/></ComponentWrapper>
              })}
          </div>
      </section>
    );
  }
}

export default Builder;
