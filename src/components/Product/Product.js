import React from 'react';
import './Product.css';
const Product = (props) => {
    const {handleAddToCart, product} = props;
    const  {name,price,img,shipping,ratings} =props.product;
    return (
            <div className='single-product' >
                <div>
                    <img src={img} alt="" />
                    <h2> {name.slice(0,20)} </h2>
                    <h3> Price : ${price} </h3>
                    <p>In Shipping : {shipping}</p>
                    <p> tax : {ratings} </p>
                </div>
                <button onClick={()=>handleAddToCart(product)} className='cart-btn'> Add to cart</button>
            </div>  
    );
};
export default Product;