import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="row">
              <nav className='mainNav'>
                <ul className='mainNav-nav'>
                <li className="logo">
                    <div className="nav-link">
                        <span className="link-text logo-text">Floran POS</span>
                        
                        <svg width="440" height="558" viewBox="0 0 440 558" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="105" cy="453" r="105" fill="white"/>
                            <line x1="140" y1="363" x2="140" y2="92" stroke="white" strokeWidth="8"/>
                            <line x1="196" y1="414" x2="196" y2="130" stroke="white" strokeWidth="8"/>
                            <rect x="133.988" y="77.9162" width="294.249" height="62.9928" rx="27" transform="rotate(-14.36 133.988 77.9162)" fill="white" stroke="white" strokeWidth="8"/>
                            <rect x="134.867" y="225.702" width="286.61" height="53" rx="26.5" transform="rotate(-14.36 134.867 225.702)" fill="white" stroke="white" strokeWidth="8"/>
                            <rect x="140" y="98" width="57" height="349" fill="white"/>
                            <rect x="405.189" y="160.414" width="45.1" height="254.191" rx="22.55" transform="rotate(75.5589 405.189 160.414)" fill="white"/>
                            <ellipse cx="105.5" cy="452.5" rx="80.5" ry="78.5" fill="white"/>
                        </svg>
                    </div>
                </li>
                    <li className="mainNav-item">
                        <Link to="/dashboard" className="nav-link">
                        <i className="fa-secondary far fa-chart-bar"></i>
                        <span className="link-text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <span className="nav-header">
                            <u>
                                Restaurant_Management
                            </u>
                        </span>
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
                            <u>
                                RetailManagement
                            </u>
                        </span>
                    </li>
                    <li className="mainNav-item">
                        <a href="/product" className="nav-link">
                        <i className="fa-primary fab fa-product-hunt"></i>
                        <span className="link-text">Product Inventory</span>
                        </a>
                    </li>
                    <li className="mainNav-item">
                        <a href="/supplier" className="nav-link">
                        <i className="fa-primary far fa-handshake"></i>
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
                        <a href="#" className="nav-link">
                        <i className="far fa-user"></i>
                        <span className="link-text">User</span>
                        </a>
                    </li>
                </ul>
            </nav>
      </div>
        )
    }
}

export default Navbar;
