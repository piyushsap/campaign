import React, { useState }  from 'react';
import {Input, Button, Text, Row} from '../Components/index'


export const componentMap = {
  Text: Text,
  Image: Image,
  Button: Button,
  Input: Input,
  Row: Row
};
let index = 1;
function Builder() {
  const [components, setComponents] = useState([]);
  var handleDrop = (e) => {
    const compType = e.dataTransfer.getData('text');
    const currentComponent = e.target.closest(".component-container");
    if(currentComponent) {
      const componentIndex = [...document.querySelector('.builder-wrapper').children].indexOf(currentComponent) + 1;
      const newComponents = [...components.slice(0, componentIndex), 
      {id: index++,
        name: compType
      },...components.slice(componentIndex)];
      setComponents(newComponents);
    }
    else {
      setComponents([...components, {
        id: index++,
        name: compType
      }]);
    } 
  };
  return (
    <section className="builder">
        <h2>Builder</h2>
        <div className="builder-wrapper" onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e)}>
            {/* <Text />
            <Input {...{ type: "text", placeHolder: "bonus", id: "bonus" }} />
            <Button {...{type:"submit", val:"cheking"}}/> */}
            {components.map(comp => {
              const CompName = componentMap[comp.name];
              return <div className ="component-container"><CompName key = {comp.id}/></div>
            })}
        </div>
    </section>
  );
}

export default Builder;
