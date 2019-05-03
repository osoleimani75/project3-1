import React, { Component } from "react";
import logo from './images/logo.jpg'
import './style/style.css';
import AuthService from '../AuthService';
import $ from 'jquery';

class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    componentDidMount() {
        $(document).ready(function(){
            $('#sidebarCollapse').on('click',function(){
                $('#sidebar').toggleClass('active');
            });
        });
    }
    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return(
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Add Garage</a>
                        </li>
                    </ul>
            );
        }else {
            return(
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login Member</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Add Garage</a>
                    </li>
                </ul>
        );

        }
    };
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header"><h3>Bootstrap Sidebar</h3></div>
                    <ul className="list-unstyle components">
                        <p>Dummy Heading</p>
                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdwon-toggle">Home</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li> <a href="/">home1</a></li>
                                <li> <a href="/">home2</a></li>
                                <li> <a href="/">home3</a></li>
                            </ul>
                        </li>
                        <li><a href="/">About</a></li>                        
                        <li><a href="/">Contact Us</a></li>                        
                        <li><a href="/">Services</a></li>                        
                    </ul>

                </nav>
                <div className="content">
                     <nav className="navbar  navbar-light bg-light">
                        <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <i className="fas fa-align-justify"></i>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img className="logo" src={logo} alt="logo"/>
                        </a>
                        <ul className="nav justify-content-center">
                            <li classNmae="nav-item ">
                                <a className="nav-link nav-icon" href="/"> <i className="far fa-map"></i> Map</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-icon" href="/"> <i className="fas fa-th-list"></i> List</a>
                            </li>
                        </ul>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            {this.showNavigation()}
                        </div>
                     </nav>
                </div>
            </div>




        )
    }
}

export default Navbar;