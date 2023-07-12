import React from 'react';
import '../css/Navbar.scss';
import home from '../images/home.png';
import about from '../images/about.png';
import cart from '../images/cart.png';
import account from '../images/account.png';
import contact from '../images/contact.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='title-logo'> <img src={ cart } alt='shopping-cart' /> <h1>VivaLuxe Webstore.</h1> </div>
            <ul className='tabs'>
                <NavLink to='/' className='nav tab'><img src={ home } alt='home' />Home</NavLink>
                <NavLink to='cart' className='nav tab'><img src={ cart } alt='cart' />Cart</NavLink>
                <NavLink to='about' className='nav tab'><img src={ about } alt='about' />About</NavLink>
                <NavLink to='contact' className='nav tab'><img src={ contact } alt='contact' />Contact</NavLink>
                <NavLink to='account/' className='nav tab' ><img src={ account } alt='account' />Account</NavLink>
            </ul>
        </div>
    );
}

export default Navbar;