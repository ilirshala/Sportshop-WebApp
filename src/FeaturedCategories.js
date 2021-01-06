import React from 'react';
import './FeaturedCategories.css';
import img5 from './img/img5.jpg';
import img1 from './img/img1.jpg';
import img8 from './img/img8.jpg';

function FeautredCategories() {
    return (
        <div className="featuredCategories">
            <div className="small-container">
                <div className="row">
                    <div className="col-3"><img src={img5} alt=""/></div>
                    <div className="col-3"><img src={img1} alt=""/></div>
                    <div className="col-3"><img src={img8} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default FeautredCategories
