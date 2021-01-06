import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="container">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <div className="total__price">
                            <table>
                                <tr>
                                    <td>Subtotal ({basket.length} items)</td>
                                    <td><strong>{value}</strong></td>
                                </tr>
                            </table>
                        </div>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal
