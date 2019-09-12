import React, { Component, Fragment }  from 'react';
import {Input, Button, Text, Row, Image, Video, Checkbox, RadioButton, Divider,Texteditor, Formcomp} from '../Components/index';
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
  Row: Row
};
let selectedId = 0;
let index = 1;
class Builder extends Component {
  //const [components, setComponents] = useState([]);
  state = {components: [], selectedComponent: null};

  // useEffect(_ => {
  //     componentService.postComponents(components);
  // }, [components.length]);
  updateAttributes = (attributes, customObj) => {
      const components = this.state.components;
      const comp = this.state.selectedComponent;
      const compIndex = components.findIndex(c => c.id === comp.id);
      const updatedComp = {...comp};
      if(customObj) {
        if(customObj.type === 'Row') {
          updatedComp.attributes.cells = [...Array(customObj.value)].map((item, index) => {
              return {
                id: index,
                name: 'Cell',
                attributes: {style: {}},
                components: []
              }
          });
        }
      }
      else {
        const updatedStyles = {...updatedComp.attributes.style, ...attributes.style};
        updatedComp.attributes = {...updatedComp.attributes, updatedStyles};
        updatedComp.attributes = {...updatedComp.attributes, ...attributes};
      }
      this.setState({components: [...components.slice(0, compIndex), updatedComp, ...components.slice(compIndex + 1)], selectedComponent: updatedComp});
  }

  componentDidMount() {
    this.campaignID = this.props.match.params.id;
    //componentService.addComponentEditSubscriber((attributes) => this.updateAttributes(selectedId, attributes));
    debugger;
    componentService.fetchComponents(this.props.match.params.id).then(response => {
      this.setState({components: response});
    });
  }

  componentDidUpdate() {
    this.postRequest();
  }

  postRequest = () => {
    componentService.postComponents({[this.campaignID]: this.state.components});

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
      attributes: {label: "hello", style: {'fontWeight': 'bold'}, 'src': 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg', 'videoUrl': 'https://www.youtube.com/embed/b_-dgO63ORs'}
    };
    if(currentComponent) {
      const componentIndex = [...document.querySelector('.builder-wrapper').children].indexOf(currentComponent) + 1;
      const newComponents = [...components.slice(0, componentIndex),
      newComponent,...components.slice(componentIndex)];
      this.setState({components: newComponents});
      //setComponents(newComponents);
    }
    else {
      this.setState({components:[...components, newComponent]});
    } 
    componentService.notifyComponentChange({type: compType});
  };

  onComponentClick = (comp) => {
    this.setState({'selectedComponent': comp});
    //selectedId = id;
    //componentService.notifyComponentChange({type: compType});
  }

  onComponentChange = (e, props) => {
    this.updateAttributes({'imageSrc': e.target.result});
  }

  onPropertyChange = (e, props) => {
    const styleAttrs = {
      lineHeight: 'lineHeight',
      color: 'color'
    };
    const propName = props.element.key;
    if(propName === 'lineHeight' || propName === 'color' ) {
      this.updateAttributes({style: {[styleAttrs[propName]]: e.currentTarget.value}});
    }
    else if(propName === 'columns') {
      this.updateAttributes(null, {type: 'Row', value: parseInt(e.currentTarget.value)});
    }
    else if(propName === 'image') {
      this.updateAttributes({'imageSrc': e.target.result});
    }
    else {
      this.updateAttributes({[propName]: e.currentTarget.value});
     // componentService.notifyComponentEdit({[props.name] : e.currentTarget.value})
     //props.component.attributes = {...props.component.attributes, propName: e.currentTarget.value};
    }
  }

  setSelectedComponent = (comp) => {
    this.setState({'selectedComponent': comp});
  }

  deleteComponent = (comp)=> {
    const components = this.state.components;
    const indexOfComp = components.indexOf(comp);
    debugger;
    components.splice(indexOfComp,1);
    this.setState({components});

  }

  render() {
    return (
      <Fragment>
        <Sidebar/>
        <section className="builder">
            <h2>Builder <NavLink to='/publish'><Button {...{type:"button", val:"Publish",class:'publish'}}/></NavLink></h2>
            <div className="builder-wrapper" onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => this.handleDrop(e)}>
                {/* <Text />
                <Input {...{ type: "text", placeHolder: "bonus", id: "bonus" }} />
                <Button {...{type:"submit", val:"cheking"}}/> */}
                <Texteditor />
                {this.state.components.map(comp => {
                  const CompName = componentMap[comp.name];
                  return <ComponentWrapper handleDelete = {_ => this.deleteComponent(comp)} clickHandler = {(e) => {this.onComponentClick(comp)}}  key = {comp.id}  ><CompName components = {this.state.components} name = {comp.compType} comp = {comp} onChange = {this.onComponentChange} {...comp.attributes} key = {comp.id} id = {comp.id} updateAttributes = {this.updateAttributes} postRequest= {this.postRequest}/></ComponentWrapper>
                })}
            </div>
        </section>
        <SidebarRight onPropertyChange = {this.onPropertyChange} component = {this.state.selectedComponent}/>
      </Fragment>
    );
  }
}

export default Builder;
