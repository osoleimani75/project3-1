import React from 'react';
import './sidedrawer.css';
import profile from './men.png';

const SideDrawer = props => {
    let drawerClasses= 'side-drawer'
    if (props.show)
        drawerClasses = 'side-drawer open';
    return (
        <div className={drawerClasses} >
                <div className="profile"><img src={profile} alt="profile"></img></div>
            <ul>
            <li><a href="/">New Garage Sale</a></li>
            <li><a href="/">View Garage Sale</a></li>
            <li><a href="/" onClick={() => props.logout()}>Logout</a></li>
            </ul>
        </div>

    );
}
export default SideDrawer;