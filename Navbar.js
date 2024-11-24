import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link> | <Link to="/checkout">Checkout</Link> | <Link to="/dashboard">Dashboard</Link>
    </nav>
);

export default Navbar;
