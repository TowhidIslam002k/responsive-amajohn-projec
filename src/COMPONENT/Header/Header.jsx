import React from 'react';
import { useContext } from 'react';
import logo from '../../images/Logo.svg'
import ActiveLink from '../ActiveLink/ActiveLink';
import { UserContext } from '../ContextProviders/AuthProviders';
import './Header.css'

const Header = () => {
    const { user, loading } = useContext(UserContext);
    console.log(user)
    if (loading) {
        return <nav className='header flex justify-between items-center sticky top-0 z-10'>
            <img src={logo} alt="" />
            <div className="items md:w-5/12 sm:w-6/12 lg:w-4/12 xl:w-1/4">
                <ActiveLink to="/"></ActiveLink>
            </div>
        </nav>;
    }

    if (user && user.photoURL !== '') {
        return <nav className='header flex justify-between items-center sticky top-0 z-10'>
            <img src={logo} alt="" />
            <div className="items md:w-6/12 sm:w-7/12 lg:w-4/12 xl:w-1/4">
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">orders</ActiveLink>
                <ActiveLink to="/inventory">inventory</ActiveLink>
                <ActiveLink to="/logout">Logout</ActiveLink>
            </div>
        </nav>
    }

    return (
        <nav className='header flex justify-between items-center sticky top-0 z-10'>
            <img src={logo} alt="" />
            <div className="items md:w-6/12 sm:w-7/12 lg:w-4/12 xl:w-1/4">
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">orders</ActiveLink>
                <ActiveLink to="/inventory">inventory</ActiveLink>

                {user && user.emailVerified?
                    <ActiveLink to="/logout">Logout</ActiveLink>
                    :
                    <>
                        <ActiveLink to='/login'>Login</ActiveLink>
                        <ActiveLink to='/signup'>Sign Up</ActiveLink>
                    </>
                }

            </div>
        </nav>
    );
};

export default Header;