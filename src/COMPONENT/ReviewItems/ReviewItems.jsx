import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItems.css'

const ReviewItems = ({ product, handleRemoveProduct }) => {
    const { name, price, quantity, _id, img } = product;
    return (
        <div className='single-items'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='pgraph text-primary font-bold text-2xl'>{name}</p>
                <p className='pgraph text-primary font-size font-bold'>Price : <span style={{ color: 'orange' }}>${price}</span></p>
                <p className='pgraph text-primary font-size font-bold'>Quantity : <span style={{ color: 'orange' }}>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveProduct(_id)} style={{ borderRadius: '50%' }}> <FontAwesomeIcon className='delet-icon' icon={faTrashAlt}></FontAwesomeIcon> </button>
        </div>
    );
};

export default ReviewItems;