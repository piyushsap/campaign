import React, {Component} from 'react';
import {Cell} from './../../Components/index';

class Row extends Component {
    render() {
        return (
            <div className = 'row'>
                {this.props.cells && this.props.cells.map((item, index) => <Cell {...this.props}  key = {index} comp = {this.props.cells[index]}/>)}
            </div>
        )
    }
    
} 

export default Row;