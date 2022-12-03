import React from 'react';
import './App.css';
import Classprops from './Classprops';
import Newfile from './Components/Newfile';
import Functionprops from './Functionprops';
class App extends React.Component{
  styles={
    fontStyle:"bold",
    color:"teal"
  };
  render(){
    return(
<div className="App">
  <h1 style={this.styles}>Welcome</h1>
  <Newfile/>
  <Classprops name="Racha Ghariani" place="Ennasr II,Ariana " />
  <p>child component </p>
  <button>clik ici !</button>
  <Functionprops name="Omar"from place="France"/>{" "}
</div>
    )
  }
}
export default App;
