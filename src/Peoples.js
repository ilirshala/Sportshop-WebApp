import React from 'react';
import './Peoples.css';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function Peoples({ paragraph, rating, image, username }) {
    return (
        <div className="peoples">
            <div className="col-3">
                <FormatQuoteIcon />
                <p>{paragraph}</p>
                <div className="rating">
                    {Array(rating).fill().map((_) => (
                        <p>&#11088;</p>
                    ))}
                </div>
                <img src={image} alt="" />
                <h3>{username}</h3>
            </div>
        </div>



    )
}

export default Peoples
