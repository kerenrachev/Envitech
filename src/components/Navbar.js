
import { legends } from '../data/Legends'
import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems'
import '../App.css';


const Navbar = () => {

  return (
    <nav>
      <ul className="menus">
        {legends["MonitorType"].map((item, index) => {
            return <MenuItems monitorTypeId={item["Id"]} monitorName={item['Name']}/>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;