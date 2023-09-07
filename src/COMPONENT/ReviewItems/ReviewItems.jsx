import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItems.css'

const ReviewItems = ({product, handleRemoveProduct}) => {
    const {name, price, quantity, id, img} = product;
    return (
        <div className='single-items'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='title pgraph'>{name}</p>
                <p className='pgraph'>price : <span style={{color:'orange'}}>{price}</span></p>
                <p className='pgraph'>quantity : <span style={{color:'orange'}}>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveProduct(id)} style={{borderRadius:'50%'}}> <FontAwesomeIcon className='delet-icon' icon={faTrashAlt}></FontAwesomeIcon> </button>
        </div>
    );
};

export default ReviewItems;