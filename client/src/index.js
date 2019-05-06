import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
// import Home from './pages/home';
import App from './pages/Search';
import Sale from './pages/Sale';
import Login from './pages/user/Login';
import Profile from './pages/user/Profile';
import Signup from './pages/user/Signup';
import Navbar from './components/Navbar/Nav';
import AuthService from './components/AuthService';
// import SideDrawer from './components/SideDrawer/SideDrawer';
// import Backdrop from './components/Backdrop/Backdrop';
// import DrawerToggleBtn from './components/SideDrawer/drawerToggelBtn';

// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

const authService = new AuthService()

class Root extends React.Component {
    state = {
        isLoggedIn: authService.loggedIn()
    }
    logout = () => {
        authService.logout() // refreshes page, no need to update state
    }
    login = (email, password) => {
        return authService.login(email, password).then(res => {
            this.setState({ isLoggedIn: this.loggedIn() })
            return res
        })
    }

    loggedIn = () => authService.loggedIn()

    render() {
        const Auth = {
            logout: this.logout,
            login: this.login,
            loggedIn: this.loggedIn
        }
        return (<Router>
            <div>
                <Navbar isLoggedIn={this.state.isLoggedIn} />
                <main style={{ marginTop: '60px' }}>
                    <Route exact path="/" component={App} />
                    <div style={{ marginTop: '100px' }}>
                            <Route exact path="/login" component={props => <Login {...props} auth={Auth} />} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/sale" component={Sale} />
                            <Route exact path="/profile" component={Profile} />
                    </div>
                </main>
            </div>
        </Router>)
    }
}
ReactDOM.render(
    <Root />
    , document.getElementById('root')
);
registerServiceWorker();
