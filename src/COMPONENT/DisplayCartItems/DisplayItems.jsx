import React from 'react';
import './DisplayItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const DisplayItems = ({ items, btnHandler }) => {
    const { name, img, ratings, quantity, id, seller, price } = items;
    return (
        <div className='product w-full lg:w-full md:w-4/5 sm:w-4/5 mb-5 sm:mb-0 lg:mb-0 md:mb-0'>
            <img className='mx-auto' src={img} alt="" />
            <div className='details pl-3'>
                <h6 className='text-primary my-3 font-bold'>{name}</h6>
                <h4 className='text-primary my-3 font-bold'>Price : $<span style={{color:'tomato'}}>{price}</span></h4>
                <h6 className='text-primary my-3 font-bold'>Manufacturer : <span style={{color:'tomato'}}>{seller}</span></h6>
                <h6 className='text-primary my-3 font-bold'>Rating : {ratings} star</h6>
            </div>
            <button onClick={() => btnHandler(items)} className='add-btn'>Add to card
                <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default DisplayItems;