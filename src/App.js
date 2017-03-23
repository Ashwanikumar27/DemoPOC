import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child.js';
var i=-1;
class App extends Component {
  

constructor(props) {
    super(props);     
     this.state = {
      display:[],
      src:['one','two','three','four','five','six','seven','eight','nine','ten'],
      renderChild: false
    };
}

  plus()
  { 
     i=i+1; 
    if(i<this.state.src.length)
    {
    this.state.display.push(this.state.src[i]);
    this.setState({renderChild: true});
    }
  }

   remove(index) 
   {
       var simi= this.state.display;
       simi.splice(index,1);
       this.setState({display:simi}); 
       this.render();     
    }


  render() 
   {
  var opp=this.state.display.map(function(value,key){
  return(
  <Child value={value} key1={key} delete1={this.remove.bind(this)} />
  )
  }.bind(this));
  
   return (
      <div className="App">
      <button onClick={this.plus.bind(this)}>plus</button>    
      {this.state.renderChild ? opp  : null}
      </div>
    );
  }
}

export default App;


