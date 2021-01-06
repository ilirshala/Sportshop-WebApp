import React from 'react';
import './Products.css';
import { useStateValue } from './StateProvider';

function Products({id,image,title,rating,price}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to Basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                image: image,
                title: title,
                rating: rating,
                price:price
            }
        })
    }
    return (
        <div className="col-4">
            <img src={image} alt=""/>
            <h4>{title}</h4>
            <div className="rating">
                {Array(rating).fill().map((_) => (
                    <p>&#11088;</p>
                ))}
            </div>
            <div className="price">
                
                <p>${price}</p>
            </div>
            
            <button onClick={addToBasket} className="btn-1">Add to basket</button>
        </div>
    )
}

export default Products
