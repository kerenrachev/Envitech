
import { useDispatch } from 'react-redux';
import '../App.css';
import { setLegendByMonitorId } from '../redux/actions/legend'


const Dropdown = ({ monitorTypeName, monitorTypeLegendId, monitorList, dropdown }) => {

  const dispatch = useDispatch()

  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {monitorList?.map((submenu, index) => (
        <>
          {submenu.Name ?
            <li key={index} className="menu-items">
              <button className='nav-submenu-button' type="button" onClick={() => dispatch(setLegendByMonitorId(monitorTypeLegendId, monitorTypeName, submenu.Name))}>{submenu.Name}</button>
            </li>
            :
            false

          }

        </>


      ))}
    </ul>
  );
};

export default Dropdown;