import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
// import Home from './pages/home';
import App from './App';
import Login from './pages/user/Login';
import Profile from './pages/user/Profile';
import Signup from './pages/user/Signup';
// import Navbar from './components/Nav/toolbar';
// import SideDrawer from './components/SideDrawer/SideDrawer';
// import Backdrop from './components/Backdrop/Backdrop';
// import DrawerToggleBtn from './components/SideDrawer/drawerToggelBtn';

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}


ReactDOM.render(
        <Router>
        <div>
            <main style={{marginTop: '60px'}}>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
            </main>
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
