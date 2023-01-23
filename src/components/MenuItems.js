import Dropdown from './Dropdown';
import { useEffect, useState } from 'react';
import '../App.css';
import { MONITOR } from '../constants/legendsJSON';
import {MONITOR_TYPE_ID} from '../constants/legendsJSON';

var legends = require('../data/Legends.json')
const MenuItems = ({ monitorTypeId, monitorTypeName, monitorTypeLegendId }) => {

    const [monitorList, setMonitorList] = useState([])
    const [dropdown, setDropdown] = useState(false);


    function getMonitorListById(){
        let tempMonitorList = []
        legends[MONITOR]?.forEach((item)=>{
            if(item[MONITOR_TYPE_ID] === monitorTypeId){
                tempMonitorList.push(item)
            }
        })
        setMonitorList(tempMonitorList)
    }


    useEffect(()=>{
        getMonitorListById()
    },[])

  return (
    <li key={monitorTypeId} className="menu-items">
          <button type="button" aria-haspopup="menu"
          className='nav-button'
           aria-expanded={dropdown ? "true" : "false"}
           onClick={() => setDropdown((prev) => !prev)}
          >
            {monitorTypeName}{' '}
          </button>
          <Dropdown monitorTypeName={monitorTypeName} monitorTypeLegendId={monitorTypeLegendId} monitorList={monitorList} dropdown={dropdown}/>
    </li>
  );
};

export default MenuItems;