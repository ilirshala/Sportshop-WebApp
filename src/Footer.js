import React from 'react';
import './Footer.css';
import logo from './img/logooo.png';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-2">
                        <img src={logo} alt="" />
                        <p>If you don't want to be the best then there's no reason going out and trying to accomplish
                        anything.</p>
                    </div>
                    <div class="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instgram</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                    <hr />
                    <p class="copyright">Copyrights 2020 - Ilir Shala</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
