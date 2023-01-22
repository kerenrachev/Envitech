import Dropdown from './Dropdown';
import { legends } from '../data/Legends'
import { useEffect, useState } from 'react';
import '../App.css';

const MenuItems = ({ monitorTypeId, monitorTypeName }) => {

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
          className='nav-button'
           aria-expanded={dropdown ? "true" : "false"}
           onClick={() => setDropdown((prev) => !prev)}
          >
            {monitorTypeName}{' '}
          </button>
          <Dropdown monitorTypeName={monitorTypeName} monitorTypeId={monitorTypeId} monitorList={monitorList} dropdown={dropdown}/>
    </li>
  );
};

export default MenuItems;