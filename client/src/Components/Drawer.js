import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';
import ShoppingCart from '../assets/shopping-cart.svg';
import Logout from '../assets/shopping-cart.svg';

export const Drawer = (props) => {
    return (
        <div className='drawer-view-container'>
            <div className="drawer-top-action-container">
                <div className='drawer-top-logo-container'>
                    <img src={Logo} />
                </div>
                <div className='drawer-top-menu-container'>
                    <Link to='/Browsing'>Menu</Link>
                    <img src={Menu} />
                </div>
                <div className='drawer-top-cart-container'>
                    <Link to='/Browsing'>Cart</Link>
                    <img src={ShoppingCart} />
                </div>
            </div>
            <div className="drawer-bottom-action-container">
                <div className='drawer-bottom-logout-container'>
                    <Link to='/' onClick={()=>props.handleLogout()}>Logout</Link>
                    <img src={Logout} />
                </div>
            </div>
        </div>
    )
}