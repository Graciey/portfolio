import React, {Component} from 'react';
import grace from './grace.jpg';
import {Link} from 'react-router-dom';
import './Navbar.css';



class Navbar extends Component {
   
    render() {
        
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
                <a className="navbar-brand " href="#" style={{color: 'purple', fontSize: ''}}>Grace</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active ">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/works" className="nav-link">Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/form" className="nav-link">Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>  
        )
    }
}
   
export default Navbar;

