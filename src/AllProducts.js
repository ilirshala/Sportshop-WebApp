import React from 'react';
import './AllProducts.css'
import { Nav, Navbar } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from './img/logooo.png';
import Products from './Products';
import image1 from './img/image-1.jpg';
import img1 from './img/img1.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img2 from './img/img2.jpg';
import img8 from './img/img8.jpg';
import img3 from './img/img3.jpg';
import img11 from './img/img11.jpg';
import img13 from './img/img13.jpg';
import img12 from './img/img12.jpg';
import img14 from './img/img14.jpg';
import Footer from './Footer';
import { Link, NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function AllProducts() {
    const [{ basket }] = useStateValue();
    return (
        <div className="allProducts">
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


            <div className="container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option>Default Sorting</option>
                        <option>Sort by price</option>
                        <option>Sort by popularity</option>
                        <option>Sort by rating</option>
                        <option>Sort by sale</option>
                    </select>
                </div>
                <div className="row">
                    <Products
                        id="105"
                        image={image1}
                        title="Kyrie 7"
                        rating={5}
                        price={130.98}
                    />
                    <Products
                        id="106"
                        image={img1}
                        title="Zoom Freak 2"
                        rating={5}
                        price={120.95}
                    />
                    <Products
                        id="107"
                        image={img4}
                        title="Nike Sportswear Tech "
                        rating={5}
                        price={350.88}
                    />
                    <Products
                        id="108"
                        image={img5}
                        title="Nike Sportswear Tech "
                        rating={5}
                        price={120.25}
                    />
                </div>
                <div className="row">
                    <Products
                        id="105"
                        image={img6}
                        title="Nike Sportswear Club"
                        rating={4}
                        price={50.45}
                    />
                    <Products
                        id="106"
                        image={img2}
                        title="Nike Adapt BB 2.0"
                        rating={5}
                        price={350.98}
                    />
                    <Products
                        id="107"
                        image={img8}
                        title="Stripes Hoodie"
                        rating={4}
                        price={35.55}
                    />
                    <Products
                        id="108"
                        image={img3}
                        title="Nike Sportswear Tech "
                        rating={5}
                        price={43.45}
                    />
                </div>
                <div className="row">
                    <Products
                        id="109"
                        image={img11}
                        title="Nike ACG 4th Horsman"
                        rating={4}
                        price={600.99}
                    />
                    <Products
                        id="110"
                        image={img13}
                        title="Nike Everyday Max "
                        rating={5}
                        price={20.22}
                    />
                    <Products
                        id="107"
                        image={img12}
                        title="Nike Sportswear Club"
                        rating={4}
                        price={35.88}
                    />
                    <Products
                        id="108"
                        image={img14}
                        title="Nike Vapor Crew "
                        rating={5}
                        price={16.45}
                    />
                </div>
                <div class="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&rarr;</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllProducts
