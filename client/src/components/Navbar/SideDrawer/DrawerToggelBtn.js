import React from 'react';
import './drawertoggle.css';

const DrawerToggleBtn = props =>(
    <button className="toggle_Btn" onClick={props.click}>
        <div className="toggle_line"/>
        <div className="toggle_line"/>
        <div className="toggle_line"/>

    </button>
);
export default DrawerToggleBtn;