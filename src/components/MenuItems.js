import Dropdown from './Dropdown';
import { useState } from 'react';
import '../App.css';

const MenuItems = ({ monitorTypeId, monitorTypeName, legends, monitorList }) => {

  const [dropdown, setDropdown] = useState(false);


  return (
    <li key={monitorTypeId} className="menu-items">
      <button type="button" aria-haspopup="menu"
        className='nav-button'
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {monitorTypeName}{' '}
      </button>
      <Dropdown monitorTypeName={monitorTypeName} legends={legends} monitorList={monitorList} dropdown={dropdown} />
    </li>
  );
};

export default MenuItems;