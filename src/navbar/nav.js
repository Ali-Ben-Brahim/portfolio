import React from "react";
import './nav.css';
class Navbar extends React.Component{
render(){
    return  <header>
    <a href="#" className="logo">Ali</a>
    <nav className="navigation">
        <a href="">services</a>
        <a href="">project</a>
        <a href="">contact</a>
    </nav>
</header>
}

}
export default Navbar;