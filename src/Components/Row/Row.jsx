import React, {Component} from 'react';
import {Cell} from './../../Components/index';
import {styleToObject} from './../../Common/utils';

class Row extends Component {


    render() {
        let style = {"display": "flex", ...styleToObject(this.props.customStyle)};
        if(this.props.style) {
            style = {...style, ...this.props.style};
        }
        return (
            <div className = 'row' style = {style}>
                {this.props.cells && this.props.cells.map((item, index) => <Cell {...this.props}  key = {index} comp = {this.props.cells[index]}/>)}
            </div>
        )
    }
    
} 

export default Row;