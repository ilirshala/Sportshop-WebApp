import React from 'react';
import Products from './Products';
import './FeaturedProducts.css';
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


function FeaturedProducts() {
    return (
        <div className="small-container">
            <h2 className="title">Feautured Products</h2>
            <div className="row">
                <Products
                    id="101"
                    image={image1}
                    title="Kyrie 7"
                    rating={4}
                    price={130.99}
                />
                <Products
                    id="102"
                    image={img1}
                    title="Zoom Freak 2"
                    rating={5}
                    price={120.88}
                />
                <Products
                    id="103"
                    image={img4}
                    title="Nike Sportswear Down"
                    rating={4}
                    price={350.45}
                />
                <Products
                    id="104"
                    image={img5}
                    title="Nike Sportswear Tech "
                    rating={5}
                    price={120.55}
                />
            </div>
            <h2 class="title">Latest Products</h2>
            <div className="row">
                <Products
                    id="105"
                    image={img6}
                    title="Nike Sportswear Club"
                    rating={4}
                    price={50.65}
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
                    price={35.88}
                />
                <Products
                    id="108"
                    image={img3}
                    title="Nike Sportswear Tech "
                    rating={5}
                    price={43.45}
                />
                <Products
                    id="109"
                    image={img11}
                    title="Nike ACG 4th Horsman"
                    rating={4}
                    price={600.98}
                />
                <Products
                    id="110"
                    image={img13}
                    title="Nike Everyday Max "
                    rating={5}
                    price={20.88}
                />
                <Products
                    id="107"
                    image={img12}
                    title="Nike Sportswear Club"
                    rating={4}
                    price={35.98}
                />
                <Products
                    id="108"
                    image={img14}
                    title="Nike Vapor Crew "
                    rating={5}
                    price={16.45}
                />
            </div>


        </div>
    )
}

export default FeaturedProducts
