import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../ContextProviders/AuthProviders';

const Checkout = () => {
    const {loading} = useContext(UserContext);
    
    //set loader.......................
    if (loading) {
        return <div className=' flex justify-center items-center min-h-screen'>
            <progress className="progress w-96"></progress>
        </div>
    }

    return (
        <div className='my-10'>
            <h1 className='text-5xl text-violet-600 font-bold text-center'>checkout is comming soon</h1>
        </div>
    );
};

export default Checkout;