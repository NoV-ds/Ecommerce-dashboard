import React from "react";
import './menu.css';
import logo from '../img/logo3.png';
import { 
    MdDashboard, 
    MdShoppingCart, 
    MdWallet, 
    MdMultilineChart, 
    MdLockClock, 
    MdSettings, 
    MdLogout 
} from 'react-icons/md';
import { useEffect } from 'react';

function Menu() {
    useEffect (() => {
        const menuList = document.getElementById('mainMenu').querySelectorAll("li");

        function ActiveItemChange() {
            menuList.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        }
        menuList.forEach(n => n.addEventListener('click', ActiveItemChange))
    }, [])

    return (
        <menu>
            <img src={logo} alt="logo" />

            <ul id="mainMenu">
                <Icon icon={<MdDashboard />}/>
                <Icon icon={<MdShoppingCart />}/>
                <Icon icon={<MdWallet />}/>
                <Icon icon={<MdMultilineChart />}/>
                <Icon icon={<MdLockClock />}/>
            </ul>

            <ul id="lastMenu">
                <Icon icon={<MdSettings />}/>
                <Icon icon={<MdLogout />}/>
            </ul>

        </menu>
    );
}

const Icon = ({icon}) => (
    <li>
        <a href="http://localhost:3000/">{icon}</a>
    </li>
);

export default Menu;