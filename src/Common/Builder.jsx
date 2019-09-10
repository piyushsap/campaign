import React from 'react';
import {Input, Button, Text} from '../Components/index'

function Builder() {
  return (
    <section className="builder">
        <h2>Builder</h2>
        <div className="builder-wrapper">
            <Text {...{type:"h1",text:"cheking"}}/>
            <Input {...{ type: "text", placeHolder: "bonus", id: "bonus" }} />
            <Button {...{type:"submit", val:"cheking"}}/>
        </div>
    </section>
  );
}

export default Builder;
