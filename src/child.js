import React, { Component } from 'react';

class Child extends Component {
  
  render() {
    return (
      <div className="App1">
      <input type="checkbox" />
      <input type="text" id="number" value={this.props.value} />
      <button onClick={this.props.delete1.bind(this,this.props.key1)}>delete</button>
      </div>
    );
  }
}

export default Child;

//<button onClick={this.props.delete1(this.props.key1)}>delete</button>