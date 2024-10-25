import React from "react";
import './menu.css';
import logo from '../img/logo.png';
import { 
    FaDelicious, 
    FaShoppingCart, 
    FaWallet, 
    FaChartLine, 
    FaRegClock, 
    FaCog, 
    FaSignOutAlt 
} from 'react-icons/fa';

function Menu() {
    return (
        <menu>
            <img src={logo} alt="logo" />

            <ul id="mainMenu">
                <Icon icon={<FaDelicious />}/>
                <Icon icon={<FaShoppingCart />}/>
                <Icon icon={<FaWallet />}/>
                <Icon icon={<FaChartLine />}/>
                <Icon icon={<FaRegClock />}/>
                <Icon icon={<FaCog />}/>
                <Icon icon={<FaSignOutAlt />}/>
            </ul>

            <ul id="lastMenu">
                <Icon icon={<FaCog />}/>
                <Icon icon={<FaSignOutAlt />}/>
            </ul>

        </menu>
    );
}

const Icon = ({icon}) => (
    <li>
        <a href="#">{icon}</a>
    </li>
);

export default Menu;