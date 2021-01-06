import React from 'react';
import './CheckoutProduct.css';
import img14 from './img/img14.jpg';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title,price,image}) {
    const [{basket}, dispatch] = useStateValue();
    const RemoveFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="container cart__page">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div className="cart__info">
                            <img src={image} alt="" />
                            <div>
                                <p>{title}</p>
                                <small>Price: ${price}</small>
                                <br />
                                <button onClick={RemoveFromBasket}>Remove</button>
                            </div>
                        </div>
                    </td>
                    <td>Total price: ${price}</td>
                </tr>

            </table>
        </div>
    )
}

export default CheckoutProduct;
