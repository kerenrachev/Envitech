
import '../App.css';
const Dropdown = ({ monitorList, dropdown }) => {

    
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {monitorList.map((submenu, index) => (
            
            <li key={index} className="menu-items">
                <a>{submenu.Name}</a>
            </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;