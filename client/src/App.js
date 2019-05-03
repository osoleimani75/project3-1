import React, { Component } from 'react';
// import logo from './logo.svg';
// import withAuth from './components/withAuth';
import './assets/css/App.css';
import AuthService from './components/AuthService';
import Navbar from './components/Nav/toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
const Auth = new AuthService();

class App extends Component {
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
            <main style={{marginTop: "60px"}}>
                  <p> kjlshalkjd halksjdshaks jd sah</p>
            </main>
      </div>
    );
  }
}

export default App;



// <div className="App">
// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome {this.props.user.email}</h2>
// </div>
// <p className="App-intro">
//   <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
//   <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
// </p>
// </div>