
//import { legends } from '../data/Legends.json'
import React from 'react';
import MenuItems from './MenuItems'
import '../App.css';
import { MONITOR_TYPE, NAME, ID, LEGEND_ID } from '../constants/legendsJSON';

var legends = require('../data/Legends.json');

const Navbar = () => {

  return (
    <nav>
      <ul className="menus">
       
        {legends[MONITOR_TYPE]?.map((item, index) => {
            return <MenuItems monitorTypeId={item[ID]} monitorTypeLegendId={item[LEGEND_ID]} monitorTypeName={item[NAME]} key={index}/>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;