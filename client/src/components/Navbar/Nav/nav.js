import React, { Component } from 'react';
// import logo from './logo.svg';
// import withAuth from './components/withAuth';
import AuthService from '../../AuthService';
import Navbar from './toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
const Auth = new AuthService();

class Nav extends Component {
  state ={
      sideDrawerOpen: false
  };

  handleLogout = () => {
    Auth.logout();
  };
 
  goToEditProfile = () => {
    this.props.history.replace('/profile');
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !this.state.sideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    // console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div style={{height:"100%"}}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen} logout={this.handleLogout} />
            {backdrop}
      </div>
    );
  }
}

export default Nav;

