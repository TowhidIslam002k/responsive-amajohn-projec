import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Calculate from '../CalculateArea/Calculate';
import DisplayItems from '../DisplayCartItems/DisplayItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    const [items, setItems] = useState([]);
    useEffect(() => {
        const storedItems = getShoppingCart();
        const saveCart = [];
        for (const id in storedItems) {
            const addedItems = cart.find(pd => pd.id === id);
            if (addedItems) {
                const quantity = storedItems[id];
                addedItems.quantity = quantity;
                saveCart.push(addedItems);
            }
            setItems(saveCart)
        }
    }, [cart])

    const btnhandler = product => {
        let newItem = [];
        const exits = items.find(item => item.id === product.id);
        if (!exits) {
            product.quantity = 1;
            newItem = [...items, product];
        }
        else {
            product.quantity += 1;
            const remaining = items.filter(item => item.id !== product.id);
            newItem = [...remaining, exits];
        }
        setItems(newItem);
        addToDb(product.id)
    }

    const clearItems = () => {
        setItems([]);
        deleteShoppingCart()
    }
    return (
        <div className='parent-div' style={{backgroundColor: '#1D232A'}}>
            <div className="left-side grid sm:grid-cols-2 sm:gap-y-11 sm:gap-x-0 md:grid-cols-2 md:gap-y-11 lg:grid-cols-3 lg:gap-11 sm:m-5 md:m-5 lg:m-5">
                {
                    cart.map(item => <DisplayItems
                        key={item.id}
                        items={item}
                        btnHandler={btnhandler}
                    ></DisplayItems>)
                }
            </div>
            <div className="right-side mt-5 bg-gray-400 pl-1 pt-1">
                <Calculate
                    key={items.id}
                    items={items}
                    clearItems={clearItems}
                >
                <Link to='/orders'><button className='delete-btn'>Review cart
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button></Link>
                </Calculate>
            </div>
        </div>
    );
};

export default Cart;