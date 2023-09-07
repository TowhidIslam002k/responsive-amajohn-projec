import React from 'react';
import './Calculate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Calculate = ({ items, clearItems, children }) => {

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const item of items) {
        total += item.price * item.quantity;
        totalShipping += item.shipping;
        quantity += item.quantity;
    }

    const tax = total * 7 / 100;
    const netTotal = total + totalShipping + tax;

    return (
        <div className="child-of-right text-violet-700">
            <h3 className='font-bold mb-5'>Selected Items : {quantity}</h3>
            <p className='font-bold mb-5'>Total Price : {total}$</p>
            <p className='font-bold mb-5'>Shipping Cost: {totalShipping}$</p>
            <p className='font-bold mb-5'>Tax : {tax.toFixed(2)}$</p>
            <p className='font-bold mb-5'>Grand Total : {netTotal.toFixed(2)}$</p>
            <button onClick={clearItems} className="delete-btn">
                Clear Items
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {
                children
            }
        </div>
    );
};

export default Calculate;