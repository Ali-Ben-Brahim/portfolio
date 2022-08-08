import React from "react";
import './nav.css';

class Navbar extends React.Component{
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(checked) {
        this.setState({ checked });
      }
render(){
    
    return  <header>
    <a href="#" className="logo">Ali</a>
    <nav className="navigation">
        <a href="#services">services</a>
        <a href="#project">project</a>
        <a href="#contact">contact</a>
    </nav>
   
   
</header>
}

}
export default Navbar;