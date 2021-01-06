import React, { useState } from 'react';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, NavLink  } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './img/logooo.png';
import image1 from './img/image1.png';
import { Nav, Navbar } from 'react-bootstrap';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }] = useStateValue();
    console.log(basket);

    return (
        <div className="header">
            <div className="con">
                <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand href="/"><img src={logo} className="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto left">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>   
                        <Nav.Link as={NavLink} to="/checkout"><ShoppingCartIcon /><span><b>{basket?.length}</b></span></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <div className="row">
                    <div className="col-2">
                        <h1>Give Your Workout <br /> A New Style</h1>
                        <p>Success isn't always about greatness. It's about consistency. <br />Consistenthard work gains
                        success.Greatness will come.</p>
                        <Link to="/" className="btn">
                            Explore Now
                        </Link>
                    </div>
                    <div className="col-2">
                        <img src={image1} alt="uhhh" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
