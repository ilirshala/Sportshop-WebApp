import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import FeaturedCategories from './FeaturedCategories';
import FeaturedProducts from './FeaturedProducts';
import Offers from './Offers';
import Testimonials from './Testimonials';
import Footer from './Footer';
import AllProducts from './AllProducts';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/products">
            <AllProducts />
        </Route>
        <Route path="/">
          <Header />
          <FeaturedCategories />
          <FeaturedProducts />
          <Offers />
          <Testimonials />
          <Footer />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
