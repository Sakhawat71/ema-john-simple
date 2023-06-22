import { faArrowAltCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (cart) => {
    return (
        <div className='cart'>
            <h1 style={{textAlign:'center'}}>Order info</h1>
                <p>Total item: {cart.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax: ${}</p>
                <p>Grand Total: ${}</p>
                <button>
                    Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
                <br />
                <button>Review Order <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cart;