import {Link} from 'react-router-dom'
import './Dropdown.css'
export default function Dropdown({items}) {

  return (
    <ul
      className='dropdown-menu'
    >
      {items.map((item) => {
        return (
          <li key={item.id}>
            <button
              className= 'dropdown-link'
            >
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  )
}