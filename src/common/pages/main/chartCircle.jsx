import React, { Component } from 'react';

class chartCircle extends Component {

  componentDidMount() {
    
  }
  mouseMove(e) {
    console.log(e.target);
  }
  render() {
    let {x,y} = this.props;
    return (
      <div className="chartCircle" >
        <div className="circle" style={{transform: `translate(${x/15 > 10 ? 10 : x/15}px, ${y/15 > 30 ? 30 : y/15}px)`}}></div>
      </div>
    );
  }
}

export default chartCircle;