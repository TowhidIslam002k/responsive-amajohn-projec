import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../ContextProviders/AuthProviders';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className=' flex justify-center items-center min-h-screen'>
            <progress className="progress w-96"></progress>
        </div>
    }
    if (user) {
        if(user.emailVerified){
            return children;
        }
        else{
            alert('Please verify your email address.')
            return;
        }
    }
    if(!user){
        alert('This is a Private area. Please login to access it.')
        return  <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivateRoutes;