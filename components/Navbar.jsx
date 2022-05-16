import Link from "next/link";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>
      <button type="button" className="cart-icon">
        <AiOutlineShop />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  );
};

export default Navbar;
