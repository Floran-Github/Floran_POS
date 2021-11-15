import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="row">
       
        <nav className="mainNav">
          <ul className="mainNav-nav">
            <li className="logo">
              <div className="nav-link">
                <span className="link-text logo-text">Floran POS</span>

                <svg width="181" height="270" viewBox="0 0 181 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7.5" y="68.5" width="166" height="194" rx="42.5" stroke="white" strokeWidth="15"/>
                  <rect x="24.5" y="103.5" width="132" height="54" stroke="white" strokeWidth="5"/>
                  <rect x="59.5" y="2.5" width="62" height="80" fill="#FFE9DE" stroke="black" strokeWidth="5"/>
                  <rect x="31" y="176" width="19" height="21" fill="#668CCD"/>
                  <rect x="64" y="176" width="19" height="21" fill="#668CCD"/>
                  <rect x="97" y="176" width="19" height="21" fill="#668CCD"/>
                  <rect x="130" y="176" width="19" height="21" fill="#668CCD"/>
                  <rect x="31" y="213" width="19" height="21" fill="#668CCD"/>
                  <rect x="64" y="213" width="19" height="21" fill="#668CCD"/>
                  <rect x="97" y="213" width="19" height="21" fill="#668CCD"/>
                  <rect x="130" y="213" width="19" height="21" fill="#668CCD"/>
                </svg>

              </div>
            </li>

            <li>
              <span className="nav-header">
                <u>Restaurant_Management</u>
              </span>
            </li>
            <li className="mainNav-item">
              <Link to="/floorinventory" className="nav-link">
                <i className="far fa-chart-bar"></i>
                <span className="link-text">Floor Dashboard</span>
              </Link>
            </li>
            <li className="mainNav-item">
              <a href="/restaurant/inventory" className="nav-link">
                <i className="fas fa-warehouse"></i>
                <span className="link-text">Restaurant Inventory</span>
              </a>
            </li>
            <li className="mainNav-item">
              <a href="/restaurant/order" className="nav-link">
                <i className="fas fa-pallet"></i>
                <span className="link-text">Place Order</span>
              </a>
            </li>
            <li>
              <span className="nav-header">
                <u>RetailManagement</u>
              </span>
            </li>
            <li className="mainNav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="far fa-chart-bar"></i>
                <span className="link-text">Retail Dashboard</span>
              </Link>
            </li>
            <li className="mainNav-item">
              <a href="/product" className="nav-link">
                <i className="fab fa-product-hunt"></i>
                <span className="link-text">Product Inventory</span>
              </a>
            </li>
            <li className="mainNav-item">
              <a href="/supplier" className="nav-link">
                <i className="far fa-handshake"></i>
                <span className="link-text">Vendor</span>
              </a>
            </li>
            <li className="mainNav-item">
              <a href="/purchase" className="nav-link">
                <i className="fas fa-truck-moving"></i>
                <span className="link-text">Purchase</span>
              </a>
            </li>
            <li className="mainNav-item">
              <a href="/" className="nav-link">
                <i className="far fa-user"></i>
                <span className="link-text">User</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
