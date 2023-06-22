import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const hendelAddtoCard = (product) =>{
        const newCart =[...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className="productInfoinShop">
                {
                    products.map(product => <Product 
                    key={product.id} 
                    product={product}
                    hendelAddtoCard={hendelAddtoCard}
                    ></Product>)
                }
            </div>
            
            <div className="order-summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;