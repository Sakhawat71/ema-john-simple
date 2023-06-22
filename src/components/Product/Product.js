import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {hendelAddtoCard,product}=props;
    const {name,price,seller,img} =product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='details'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
            </div>

            <button onClick={()=> hendelAddtoCard(product)} className="card-footer">
                <h3>Add to card</h3>
                <FontAwesomeIcon style={{paddingLeft:'5px'}} icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;