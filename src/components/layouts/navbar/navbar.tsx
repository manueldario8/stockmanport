import './navbar.css';
import React from 'react';
import { default as stockmanageralogo } from '../../../assets/stockmanagerlogo.png';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <>
    <div className="main-nav-container mnc-theme">
      <div className="left-sct">
        <div className="logoapp">
          <img src={stockmanageralogo} alt="Stock Manager App Logo"/>
        </div>
          <Link to="/" className="titleapp">Stock Manager</Link>
      </div>

      <button  className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
      <div className={`right-sct ${isOpen ? "open" : ""}`}>
          <Link to="/">Dashboard</Link>
          <Link to="/">Orders</Link>
          <Link to="/">Products</Link>
          <Link to="/">Categories</Link>
          <Link to="/">Providers</Link>
          <Link to="/">Settings</Link>
          <Link to="/">Account</Link>
          <Link to="/">Help</Link>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar; 