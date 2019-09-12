import React, { useState, useEffect, Fragment } from 'react';
import { Input, Button, Text, Row, Image, Video, Checkbox, RadioButton, Divider } from '../Components/index';
import componentService from './../services/ComponentsService';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import SidebarRight from './SidebarRight';


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
    <div ref={compParent} onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDragLeave(e)}
      className="component-container">
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
let index = 1;
function Builder() {
  const [components, setComponents] = useState([]);
  useEffect(_ => {
    componentService.fetchComponents().then(response => {
      setComponents(response);
    });

  }, []);

  useEffect(_ => {
    componentService.postComponents(components);
  }, [components.length]);
  const updateAttributes = (id, attributes) => {
    const compIndex = components.findIndex(c => c.id === id);
    if (compIndex > -1) {
      const comp = components[compIndex];
      const updatedComp = { ...comp };
      updatedComp.attributes = { ...updatedComp.attributes, ...attributes };
      setComponents([...components.slice(0, compIndex), updatedComp, ...components.slice(compIndex + 1)]);
    }
  }
  var handleDrop = (e) => {
    const compType = e.dataTransfer.getData('text');
    const currentComponent = e.target.closest(".component-container");
    if (currentComponent) {
      const componentIndex = [...document.querySelector('.builder-wrapper').children].indexOf(currentComponent) + 1;
      const newComponents = [...components.slice(0, componentIndex),
      {
        id: index++,
        name: compType,
        attributes: { label: "hello", style: { 'fontWeight': 'bold' }, 'src': 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg', 'videoUrl': 'https://www.youtube.com/embed/b_-dgO63ORs' }
      }, ...components.slice(componentIndex)];
      setComponents(newComponents);
    }
    else {
      setComponents([...components, {
        id: index++,
        name: compType,
        attributes: { label: "hello", style: { 'fontWeight': 'bold' }, 'src': 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg', 'videoUrl': 'https://www.youtube.com/embed/b_-dgO63ORs' }
      }]);
    }
  };
  return (
    <Fragment>
      <Sidebar />
      <section className="builder">
        <h2>Builder
          <NavLink to='/publish'>
            <Button {...{ type: "button", val: "Publish", class: 'publish' }} />
          </NavLink>
        </h2>
        <div className="builder-wrapper" onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}>
          {/* <Text />
              <Input {...{ type: "text", placeHolder: "bonus", id: "bonus" }} />
              <Button {...{type:"submit", val:"cheking"}}/> */}
          {components.map(comp => {
            const CompName = componentMap[comp.name];
            return <ComponentWrapper><CompName {...comp.attributes} key={comp.id} id={comp.id} updateAttributes={updateAttributes} /></ComponentWrapper>
          })}
        </div>
      </section>
      <SidebarRight/>
    </Fragment>
  );
}

export default Builder;
