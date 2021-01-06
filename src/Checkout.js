import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from './img/logooo.png';
import './Checkout.css';
import img14 from './img/img14.jpg';
import { useStateValue } from './StateProvider';
import { Link, NavLink } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="container">
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
            </div>

            {basket?.length === 0 ? (
                <div className="noItems">
                    <h2>Shopping basket is empty</h2>
                    <p>You have no items in tour basket.
                    To buy one or more click "Add to basket"
                    next to the item.
                        </p>
                </div>
            ) : (
                    <div>
                        <div className="total__price">
                            <Subtotal />
                        </div>
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Checkout
