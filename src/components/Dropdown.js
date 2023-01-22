
import { useDispatch } from 'react-redux';
import '../App.css';
import {setLegendByMonitorId} from '../redux/actions/legend'
const Dropdown = ({ monitorTypeId,monitorList, dropdown }) => {

  const dispatch = useDispatch()
    
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {monitorList.map((submenu, index) => (
            
            <li key={index} className="menu-items">
                
                <button type="button" onClick={() => dispatch(setLegendByMonitorId(monitorTypeId))}>{submenu.Name}</button>
            </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;