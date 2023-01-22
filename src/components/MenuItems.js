import Dropdown from './Dropdown';
import { legends } from '../data/Legends'
import { useEffect, useState } from 'react';
import '../App.css';

const MenuItems = ({ monitorTypeId, monitorName }) => {

    const [monitorList, setMonitorList] = useState([])
    const [dropdown, setDropdown] = useState(false);


    function getMonitorListById(){
        let tempMonitorList = []
        legends["Monitor"].forEach((item)=>{
            if(item["MonitorTypeId"] === monitorTypeId){
                tempMonitorList.push(item)
            }
        })
        setMonitorList(tempMonitorList)
    }


    useEffect(()=>{
        getMonitorListById()
    },[])

  return (
    <li className="menu-items">
          <button type="button" aria-haspopup="menu"
           aria-expanded={dropdown ? "true" : "false"}
           onClick={() => setDropdown((prev) => !prev)}
          >
            {monitorName}{' '}
          </button>
          <Dropdown monitorList={monitorList} dropdown={dropdown}/>
    </li>
  );
};

export default MenuItems;