import React, { useState }  from 'react';
import {Input, Button, Text, Row} from '../Components/index'


export const componentMap = {
  Text: Text,
  Image: Image,
  Button: Button,
  Input: Input,
  Row: Row
};

function Builder() {
  const [components, setComponents] = useState([]);
  let index = 1;
  var handleDrop = (e) => {
    const compType = e.dataTransfer.getData('text');
    setComponents([...components, {
        id: index++,
        name: compType
      }]);
  };
  return (
    <section className="builder">
        <h2>Builder</h2>
        <div className="builder-wrapper" onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e)}>
            <Text />
            <Input {...{ type: "text", placeHolder: "bonus", id: "bonus" }} />
            <Button {...{type:"submit", val:"cheking"}}/>
            {components.map(comp => {
              const CompName = componentMap[comp.name];
              return <CompName key = {comp.id}/>
            })}
        </div>
    </section>
  );
}

export default Builder;
