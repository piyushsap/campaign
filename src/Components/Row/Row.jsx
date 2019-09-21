import React, {Component} from 'react';
import {Cell} from './../../Components/index';

class Row extends Component {


    render() {
        let style = {"display": "flex"};
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