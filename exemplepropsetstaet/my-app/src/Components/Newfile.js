import React, { Component } from 'react'
import bellA from "./bellA.png";
import bellB from "./bellB.png";
class Newfile extends Component {
    constructor(props){
        super(props)
        this.state={
       message:"My name is Racha Ghariani ",
       sub:"clik",
       imageURL:bellB
            };
        }
        styles={
            fontStyle:"italic",
            color:"purple",
          };
          btnclick=()=>{
            this.setState({
                message:"clik on subscribe please !",
                sub:"successfully subscribe ^_^"
            })
          }
          changeImage=()=>{
            this.setState({
                imageURL:bellA,
                message:"Thank you for click ^_^"
            })
          }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.btnclick}>{this.state.sub}</button>
        <p/>
        <img style={{width:"30px",height:"30px"}} src={this.state.imageURL} alt="" 
        onClick={this.changeImage}/>
      </div>
    )
  }
}

export default Newfile
