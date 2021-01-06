import React from 'react';
import './Offers.css';
import offerImg from './img/offer.jpg';

function Offers() {
    return (
        <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img src={offerImg} class="offer-img" />
                    </div>
                    <div className="col-2">
                        <p>Exclusively Available on SportShop</p>
                        <h1>Women's Brand</h1>
                        <small>Swoosh Fly collection is the result of committed listening to all hoopers, so they can feel
                        confident in their space. It channels the emotional connection that
                        players have with "standard issue" gear them for the female body.
                    </small>
                    <button className="btn-1">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Offers
