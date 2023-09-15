import React, { useContext, useEffect } from 'react';
import { Link , useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Calculate from '../CalculateArea/Calculate';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Order.css'
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '../ContextProviders/AuthProviders';

const Order = () => {
    const {user} = useContext(UserContext);
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart);
    console.log(cart)

    const handleRemoveProduct = id => {
        const remaining = cart.filter(p => p.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const clearItems = () => {
        setCart([])
        deleteShoppingCart()
    } 

    useEffect(() => {
        const intervalId = setInterval(() => {
            toast.info(<div>
                <span>Please login to get more access!</span>
                <span className='flex justify-end mt-5'>
                    <Link to="/login">
                        <button className='link link-hover text-blue-600 border rounded-md'>Login Now</button>
                    </Link>
                </span>
            </div>, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            })
        }, 60000);

        return () => { clearInterval(intervalId) };
    }, [])

    //set time out.......
    useEffect(()=>{ setTimeout(() => {
        toast.info(<div>
            <span>Please login to get more access!</span>
            <span className='flex justify-end mt-5'>
                <Link to="/login">
                    <button className='link link-hover text-blue-600 border rounded-md'>Login Now</button>
                </Link>
            </span>
        </div>, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
        })
    }, 5000);
    },[])
    //.................................
    return (<>
        {!user && <ToastContainer />}
        <div className='parent-div'>
            <div className="review-product">
                { cart.length !== 0?
                    cart.map(product => <ReviewItems 
                    key={product.id}
                    product={product}
                    handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItems>)
                    : 
                    <h1 style={{backgroundColor: '#1D232a'}} className='text-primary font-bold lg:text-5xl text-3xl border rounded p-5 my-5 order-text'>
                        Your Cart is Empty. Please add some product.
                    </h1>
                }
            </div>
            <div className="right-side mt-5 bg-gray-400 pl-1 pt-1 py-10">
                <Calculate items={cart}
                clearItems={clearItems}>
                    <Link to='/checkout'><button className="delete-btn">Check Out
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />                
                    </button></Link>
                </Calculate>
            </div>
        </div>
        </>
    );
};

export default Order;