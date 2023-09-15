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
        <div className="child-of-right text-primary">
            <h3 className='font-bold mb-5'>Selected Items : <span style={{color:'#cc0066'}}>{quantity}</span></h3>
            <p className='font-bold mb-5'>Total Price : <span style={{color:'#cc0066'}}>{total}$</span></p>
            <p className='font-bold mb-5'>Shipping Cost: <span style={{color:'#cc0066'}}>{totalShipping}$</span></p>
            <p className='font-bold mb-5'>Tax : <span style={{color:'#cc0066'}}>{tax.toFixed(2)}$</span></p>
            <p className='font-bold mb-5'>Grand Total : <span style={{color:'#cc0066'}}>{netTotal.toFixed(2)}$</span></p>
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