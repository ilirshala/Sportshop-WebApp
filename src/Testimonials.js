import React from 'react';
import Peoples from './Peoples';
import './Testimonials.css';
import user1 from './img/user-1.png';
import user2 from './img/user-2.png';
import user3 from './img/user-3.png';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.png';
import logo5 from './img/logo5.png';

function Testimonials() {
    return (
        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    <Peoples
                        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestias amet veritatis
                       officia magnam repellendus? Corrupti adipisci at dignissimos ratione."
                        rating={4}
                        image={user1}
                        username="Sean Paul"
                    />
                    <Peoples
                        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestias amet veritatis
                       officia magnam repellendus? Corrupti adipisci at dignissimos ratione."
                        rating={4}
                        image={user2}
                        username="Mike Jones"
                    />
                    <Peoples
                        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestias amet veritatis
                       officia magnam repellendus? Corrupti adipisci at dignissimos ratione."
                        rating={4}
                        image={user3}
                        username="Paul Parker"
                    />
                </div>
            </div>

            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src={logo1} alt=""/>
                        </div>
                        <div className="col-5">
                            <img src={logo2} alt=""/>
                        </div>
                        <div className="col-5">
                            <img src={logo3} alt=""/>
                        </div>
                        <div className="col-5">
                            <img src={logo4} alt=""/>
                        </div>
                        <div className="col-5">
                            <img src={logo5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
