
//import { legends } from '../data/Legends.json'
import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems'
import '../App.css';
import { MONITOR_TYPE, NAME, ID, LEGEND_ID, LEGENDS, MONITOR } from '../constants/legendsJSON';
import { useDispatch } from 'react-redux';
import { updateJSONMAP } from '../redux/actions/legend';

var legendsJSON = require('../data/Legends.json');

const Navbar = () => {

  const dispatch = useDispatch()
  const [legends, setLegends] = useState(null)

  useEffect(() => {

    dispatch(updateJSONMAP(legendsJSON, setLegends))
  }, [])


  return (
    <nav>
      <ul className="menus">

        {legends ? legends[MONITOR_TYPE]?.map((item, index) => {
          return <MenuItems monitorTypeId={item[ID]} monitorList={item[MONITOR]} legends={item[LEGENDS]} monitorTypeName={item[NAME]} key={index} />;
        })
          :
          false}
      </ul>
    </nav>
  );
};

export default Navbar;