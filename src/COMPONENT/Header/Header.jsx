import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import ActiveLink from '../ActiveLink/ActiveLink';
import { UserContext } from '../ContextProviders/AuthProviders';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(UserContext);
    
    return (
        <nav className='header flex justify-between items-center sticky top-0 z-10'>
            <img src={logo} alt="" />
            <div className="items md:w-5/12 sm:w-6/12 lg:w-4/12 xl:w-1/4">
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">orders</ActiveLink>
                <ActiveLink to="/checkout">inventory</ActiveLink>
                {/* <ActiveLink to='/login'>login</ActiveLink>
                <ActiveLink to='/signup'>signup</ActiveLink> */}
                {user ? (
                    <ActiveLink to="/logout">Logout</ActiveLink>
                ) : (
                    <>
                        <ActiveLink to='/login'>Login</ActiveLink>
                        <ActiveLink to='/signup'>Sign Up</ActiveLink>
                    </>
                )}

            </div>
        </nav>
    );
};

export default Header;