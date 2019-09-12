import React, { Component, Fragment } from 'react';
import componentService from './../services/ComponentsService';
import { NavLink } from 'react-router-dom';
import { Input, Button, Text, Row, Image, Video, Checkbox, RadioButton, Divider } from '../Components/index';

class View extends Component {
    state = {
        layout: []
    };
    componentWillMount() {
        componentService.fetchComponents().then(response => {
            this.setState({
                layout: response
            });
        });
    };
    render() {
        const componentMap = {
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
        return (
            <section className="published">
                <header className="published-header">
                    <h2>Campaign builder</h2>
                    <NavLink to='/'>
                        <Button {...{ type: "button", val: "Go Back", class: 'btn-primary' }} />
                    </NavLink>
                </header>
                <section className="published-wrapper">
                    {
                        this.state.layout.map(comp => {
                            const CompName = componentMap[comp.name];
                            return <Fragment>
                                <CompName {...comp.attributes} key={comp.id} id={comp.id} />
                            </Fragment>
                        })
                    }
                </section>
            </section>
        );
    }
}

export default View;