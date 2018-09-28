import React, { Component } from 'react';
import MainHeader from './header'
import List from './List'
import './main.less';
import ChartCircle from './chartCircle.jsx';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            clientX: 0,
            clientY: 0
        }
    }
    
    mouseMove(e) {
        console.log(e.clientX, e.clientY);
        this.setState({
            clientX: e.clientX,
            clientY: e.clientY
        })
    }
    render() {
        return (
            <div className="mainPage" onMouseMove={(e) => this.mouseMove(e)}>
                <MainHeader></MainHeader>
                <div className="mainContent">
                    <List></List>
                </div>
                <ChartCircle x={this.state.clientX} y={this.state.clientY}></ChartCircle>
            </div>
        )
    }
}

export default Main;