import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0
    let tax = 0;
    let totalcost = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    

    tax = parseFloat((total * 0.1).toFixed(2));
    totalcost = (total + shipping + tax);
    console.log(cart)

    return (
        <div className='cart'>
            <h1 style={{textAlign:'center'}}>Order info</h1>
                <p>Total item: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: ${totalcost}</p>
                <button className='btn red'>
                    Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <br />
                <button className='btn yellow'>
                    Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Cart;