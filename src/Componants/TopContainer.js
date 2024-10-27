import React, { useEffect } from 'react'
import { FaSearch, FaChevronDown, FaBell } from "react-icons/fa";
import profile from '../img/profile.jpg';

function TopContainer() {

  useEffect (() => {
    const menutarget = document.getElementById("menuchevron")
    const menuContainer = document.getElementById("menucontainer")

    menutarget?.addEventListener('mouseenter', () => {
      menutarget.style.transform = 'rotate(180deg)';
      menuContainer.style.transform = "translateX(0px)"
    });

    menuContainer.addEventListener('mouseleave', () => {
      menutarget.style.transform = 'rotate(0deg)';
      menuContainer.style.transform = "translateX(300px)"
    });

  }, []);

  return (
    <div className='topContainer'>
      <div className='inputBox' >
          <input type='text' placeholder='Search item, collections' />
        <i>
          <FaSearch />
        </i>
      </div>
    <div className='profileContainer'>
      <i className="profileIcon">
        <FaBell />
      </i>

      <div className="profileImage">
        <img src={profile} alt="" />
      </div>

      <p className="profileName">Admin</p>
      <i className="menuchevron" id='menuchevron'>
        <FaChevronDown />
      </i>

      <div className="menuContainer" id="menucontainer">
        <ul>
          <li>Profile</li>
          <li>Orders</li>
          <li>Wallet</li>
          <li>AutoPayEnable</li>
        </ul>
      </div>
    </div>  
    </div>
  )
}

export default TopContainer
