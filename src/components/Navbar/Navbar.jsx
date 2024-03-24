import { useState, useRef , useEffect } from 'react'

import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom';

import './styles.scss'
import LOGO from '../../assets/Logo.png'
import { IoIosSearch } from "react-icons/io";


const items = [
    { id : 1,
      name : 'HOME'
    },
    { id : 2,
      name : 'ELECTRONICS'
    },
    { id : 3,
      name : 'BOOKS'
    },
    { id : 4,
      name : 'MUSIC'
    },
    { id : 5,
      name : 'MOVIES'
    },
    { id : 6,
      name : 'CLOTHING'
    },
    { id : 7,
      name : 'GAMES'
    },
  ]

  const menuItems = [
    { id : 8,
      name : 'FURNITURE'
    },
    { id : 9,
      name : 'TRAVEL'
    },
    { id : 10,
      name : 'BOTANICAL'
    }
  ]

export default function Navbar(){

  const navbarRef = useRef();
  

  const [mainItems , setMainItems] = useState([...items]);
  const [moreItems , setMoreItems] = useState([...menuItems]);

  const [showList , setShowList] = useState(false);

  const [windowSize , setWindowSize] = useState([window.innerWidth]);

  console.log(windowSize);

  console.log(mainItems)
  console.log(moreItems)

  function handleOrganiseShort(){
    if(mainItems.length===0){
      return;
    }
    const removedListItem = mainItems[mainItems.length -1];
    setMainItems((prevItems) => {
      prevItems.pop();
      return prevItems
    })

    setMoreItems((prevItems)=> {
      return [...prevItems , removedListItem];
    })

    setWindowSize(window.innerWidth);
  }

  function handleOrganiseLong(){
    if(moreItems.length <=3){
      return;
    }
    const removedListItem = moreItems[moreItems.length -1];
    setMoreItems((prevItems) =>{
      prevItems.pop();
      return prevItems;
    })

    setMainItems((prevItems) =>{
      return [...prevItems , removedListItem];
    })

    setWindowSize(window.innerWidth)
  }

  function handleResize () {
  
    if(windowSize - window.innerWidth >55){
      console.log(windowSize - window.innerWidth)
      handleOrganiseShort();
    }else if(window.innerWidth- windowSize >55){
      handleOrganiseLong();
    }

  }

  function handleClick(){
    setShowList((prevShow) => {
      return !prevShow;
    })
  }

  useEffect(()=>{
    window.addEventListener('resize' , handleResize);

    return ()=>{
      window.removeEventListener('resize' , handleResize);
    }

  },[windowSize])

  return (
    <div ref = {navbarRef} className='navbar'>
      <button className='navbar-logo'><img src={LOGO} alt="Ecommerce Logo" /></button>
      <ul className='nav-menu'>
        {mainItems.map((item)=> (
          <li key ={item.id} className='nav-item'>
            <button className='nav-links'>{item.name}</button>
          </li>
        ))}
        <li className='nav-item'>
          <button className='nav-links' onClick = {handleClick}>MENU</button>
          {showList && <Dropdown items = {moreItems}/>}
        </li>
        <li  style={{textDecoration:'underline'}} className='nav-item'>
          <IoIosSearch style={{color:'white'}}/>
          <input type="text" defaultValue={'Search something'} style={{backgroundColor: 'transparent' , border: 'none' , color: 'white' , textDecoration: 'underline'}}/>
        </li>
      </ul>
      
    </div>
  )
}