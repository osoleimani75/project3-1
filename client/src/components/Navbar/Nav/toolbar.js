import React, { Component } from "react";
import logo from './images/logo.jpg'
import DrawerToggleBtn from '../SideDrawer/DrawerToggelBtn';
import './style/style.css';
import AuthService from '../../AuthService';

class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNav = () => {
        if (this.Auth.loggedIn()) {
            return (
                <div>
                    <DrawerToggleBtn click={this.props.drawerClickHandler}/>
                </div>
      
            );
        } else {
            return (
                <div className="toolbar_navitem">
                    <ul>
                        <li><a href= "/login">Login</a></li>
                    </ul>   
                </div>
            );

        }
    };


    render() {
        return (
            <header className="toolbar">
            <nav className="toolbar_nav">
    
                <div className="toolbar_logo"><a href="/"><img className="logo" src={logo} alt="logo"/></a></div>
                <div className="spacer"></div>
                {this.showNav()}
            </nav>
        </header>

        );

    }
}
export default Navbar;